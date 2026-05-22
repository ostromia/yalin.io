---
title: "How to extract concept art from Resident Evil Village"
description: ""
publicationDate: "2026-05-07"
updatedDate: "2026-05-22"
heroImage: ""
---

After not being able to find a proper guide online on how to extract the concept art from [Resident Evil Village](https://store.steampowered.com/app/1196590/Resident_Evil_Village/), I decided to make one myself.
I've tried my best to make this tutorial as beginner-friendly as possible, but if you are comfortable using a terminal you can find the necessary list of commands [here](#commands).

> [!WARNING]
> This tutorial is written for users on Windows 11 who have installed Resident Evil Village via Steam.

## tl;dr

1. Extract the `re_chunk_000.pak` file using [REE.PAK.Tool](https://github.com/Ekey/REE.PAK.Tool).
2. The concept art `.tex` files are located at `re_chunk_000\natives\stm\gui\ui1110\tex\`.
3. Convert the `.tex` files to `.dss` using `Texture-Conv-All-TEX.bat` from [REtool.zip](https://fluffyquack.com/tools/).
4. Convert the `.dss` files to `.png` using `Textconv.exe` from [DirectXTex](https://github.com/microsoft/DirectXTex).

## Prerequisites

To be able to extract the concept art, there are a few pieces of software you need to install first.
For simplicity's sake, this tutorial will handle everything inside a folder named `kennedy` in your root directory.
Start by opening PowerShell and run the following command to create this folder and move into it:

```powershell
cd \; mkdir kennedy; cd kennedy
```

Now run the following command to download the software required to extract the asset files containing the concept art and convert them into images:

```powershell
& {

    curl.exe -L -o REE.Unpacker-x64.zip https://github.com/Ekey/REE.PAK.Tool/releases/download/Latest/REE.Unpacker-x64.zip
    tar.exe -xf REE.Unpacker-x64.zip

    curl.exe -L --create-dirs -o Projects/RE8_STM_Release.list https://raw.githubusercontent.com/Ekey/REE.PAK.Tool/refs/heads/main/Projects/RE8_STM_Release.list

    curl.exe -L -o REtool.zip https://fluffyquack.com/tools/REtool.zip
    tar.exe -xf REtool.zip

    curl.exe -L -o Texconv.exe https://github.com/microsoft/DirectXTex/releases/download/mar2026/Texconv.exe
}
```

> [!NOTE]
> Any software 'installed' during this tutorial will simply place the software inside the `kennedy` folder, so don't worry about random software getting installed across your machine.

Your `kennedy` folder should now look something like this:

```text
kennedy/
    Projects/
        RE8_STM_Release.list
    Texture-Conv-Make-Small-Version.bat
    Create-PAK-2023.bat
    Create-PAK-2024.bat
    Create-PAK-2025.bat
    Extract-PAK.bat
    Texture-Conv-All-TEX.bat
    Texture-Conv-All-DDSs.bat
    REE.Unpacker.bat
    Texture-Conv.bat
    REE.Unpacker.exe.config
    System.Buffers.dll
    Zstandard.Net.dll
    libzstd.dll
    Texconv.exe
    REtool.exe
    REE.Unpacker.exe
    readme.txt
    change-log.txt
    REtool.zip
    REE.Unpacker-x64.zip
```

To open the `kennedy` folder inside File Explorer, run the following command:

```powershell
explorer.exe C:\kennedy
```

## Extraction

Run the following command to extract the contents of the `re_chunk_000.pak` file:

```powershell
.\REE.Unpacker.exe "RE8_STM_Release" "C:\Program Files (x86)\Steam\steamapps\common\Resident Evil Village BIOHAZARD VILLAGE\re_chunk_000.pak" "re_chunk_000" *> $null
```

> [!Note]
> The output for the command above is redirected to `$null` as it can cause certain terminals to become unresponsive, so don't worry if you don't see anything happening in your terminal just wait for the command to complete.

## Conversion

Run the following command to convert the necessary `.tex` asset files to `.png` files:

```powershell
& {
    mkdir re8; cpi .\re_chunk_000\natives\stm\gui\ui1110\tex\*.tex.30 .

    .\Texture-Conv-All-TEX.bat

    .\texconv.exe -ft png *dds

    mkdir re8; cpi .\*.png re8
}
```

The concept art should now be available inside the `re8` folder inside the `kennedy` folder.

## Commands

A complete list of commands from this tutorial:

```powershell
cd \; mkdir kennedy; cd kennedy

curl.exe -L -o REE.Unpacker-x64.zip https://github.com/Ekey/REE.PAK.Tool/releases/download/Latest/REE.Unpacker-x64.zip
tar.exe -xf REE.Unpacker-x64.zip

curl.exe -L --create-dirs -o Projects/RE8_STM_Release.list https://raw.githubusercontent.com/Ekey/REE.PAK.Tool/refs/heads/main/Projects/RE8_STM_Release.list

curl.exe -L -o REtool.zip https://fluffyquack.com/tools/REtool.zip
tar.exe -xf REtool.zip

curl.exe -L -o Texconv.exe https://github.com/microsoft/DirectXTex/releases/download/mar2026/Texconv.exe

.\REE.Unpacker.exe "RE8_STM_Release" "C:\Program Files (x86)\Steam\steamapps\common\Resident Evil Village BIOHAZARD VILLAGE\re_chunk_000.pak" "re_chunk_000" *> $null

mkdir re8; cpi .\re_chunk_000\natives\stm\gui\ui1110\tex\*.tex.30 .

.\Texture-Conv-All-TEX.bat

.\texconv.exe -ft png *dds

mkdir re8; cpi .\*.png re8
```
