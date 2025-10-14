import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

import axios from "axios";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function getUserData(username: string) {
    const url = {
        user: `https://api.github.com/users/${username}`,
        repos: `https://api.github.com/users/${username}/repos`
    };

    const [user, repos] = await Promise.all([axios.get(url.user), axios.get(url.repos)]);

    return { user: user.data, repos: repos.data };
}

function filterRepos(repos: Record<string, any>[], names: string[], keys: string[]) {
    return repos.filter((repo) => names.includes(repo.name)).map((obj) => Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key))));
}

async function main() {
    const USERNAME = "ostromia";
    const names = ["promethium", "reglup", "throughtheterminal", "dotfiles", "yalin.io"];
    const keys = ["full_name", "description", "language"];

    const data = await getUserData(USERNAME);
    const result = filterRepos(data.repos, names, keys);

    writeFileSync(path.join(__dirname, "data.json"), JSON.stringify(result, null, 4), "utf-8");
}

main();
