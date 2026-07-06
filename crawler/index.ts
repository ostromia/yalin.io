import { execSync } from "child_process";
import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import axios from "axios";

// TODO: terrible code but it works rewrite at some point

const __root = dirname(dirname(fileURLToPath(import.meta.url)));

async function getUserRepos(username: string, names: string[] = []) {
    const url = `https://api.github.com/users/${username}/repos`;
    let response = (await axios.get(url)).data;

    if (names.length !== 0) {
        response = response.filter((i: any) => names.includes(i.name));
    }

    await Promise.all(
        response.map(async (i: any) => {
            const languagesData = await axios.get(`${i.url}/languages`);
            i.languages = Object.keys(languagesData.data);
        })
    );

    return response;
}

async function main() {
    const USERNAME = "ostromia";
    const names = ["reglup", "nucleo-f303k8-16x2-lcd", "promethium", "dotfiles", "yalin.io"];
    const keys = ["full_name", "description", "languages"];

    const repositories = await getUserRepos(USERNAME, names);

    for (const object of repositories) {
        for (const key in object) {
            if (!keys.includes(key)) {
                delete object[key];
            }
        }
    }

    const projects = ["reglup", "nucleo-f303k8-16x2-lcd", "promethium"];

    let result = {
        projects: repositories.filter((r: any) => projects.includes(r.full_name.split("/")[1]))
            .sort((a: any, b: any) =>
                projects.indexOf(a.full_name.split("/")[1])
                - projects.indexOf(b.full_name.split("/")[1])
            ),
        other: repositories.filter((r: any) => !projects.includes(r.full_name.split("/")[1]))
    };

    for (const p of result.projects) {
        if (p.full_name == "ostromia/reglup") p.languages = ["TypeScript"];
        if (p.full_name == "ostromia/nucleo-f303k8-16x2-lcd") p.languages = ["C"];
        if (p.full_name == "ostromia/promethium") p.languages = ["Python"];
    }

    for (const p of result.other) {
        if (p.full_name == "ostromia/yalin.io") p.languages = ["Astro", "TypeScript", "SCSS"];
    }

    writeFileSync(
        join(__root, "src", "assets", "projects", "repositories.json"),
        JSON.stringify(result, null, 4),
        "utf-8"
    );

    execSync("npm run format", { cwd: __root, stdio: "inherit" });
}

main();
