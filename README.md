<h1 align="center">Typescript Simple Doc</h1> 


## ⭐ Introduction 
- **I am creating simple Typescript documentation as it will help with my projects.**


## Table of Contents
- [Functions](https://github.com/gulceselim/typescript-simple/blob/main/arrow_functions/arrow_functions.ts)
- [Object and Array](https://github.com/gulceselim/typescript-simple/tree/main/object_and_array)

## Installation
### Step 1

[nodeJS 15.9.0](https://nodejs.org/en/)

```npm install -g typescript```

### Step 2

```npm init```

![npm init](https://user-images.githubusercontent.com/43720773/108623399-f49b7800-744f-11eb-8201-086f12c16178.jpg)

### Step 3

```npm install browserify```

```npm install watchify```

![browserify](https://user-images.githubusercontent.com/43720773/108623465-4cd27a00-7450-11eb-96a9-29a1a136f434.jpg)

### Step 4
- Add an empty typescript file(main.ts) and index.html(if you want).

### Step 5
- Create file that name is ```tsconfig.json```.

![new file](https://user-images.githubusercontent.com/43720773/108623446-31676f00-7450-11eb-8c32-9bf0cc7021c7.jpg)

![add file](https://user-images.githubusercontent.com/43720773/108623596-d2eec080-7450-11eb-8636-57a93e74dcf2.jpg)

```
  {
  "compilerOptions": {
    "module":"commonjs",
    "target": "es5"
  },
  "exclude": [
    "node_modules"
  ]
  }
```

### Step 6
- Add this code to the "script" section in ```package.json```.

```"watchify": "watchify main.js -o bundle.js"```

### Step 7
- The hotkey for build is ```ctrl + shift + b```

![](https://user-images.githubusercontent.com/43720773/108623774-c1f27f00-7451-11eb-998f-ef6093833fd6.jpg)

- Press again ```ctrl + shift + b```

![](https://user-images.githubusercontent.com/43720773/108623805-f49c7780-7451-11eb-981f-10e372b5a818.jpg)


## Usage 

![](https://user-images.githubusercontent.com/43720773/108623984-fe72aa80-7452-11eb-8567-e6af00ea55d9.jpg)
