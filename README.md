# demo-app

Demo YAO App (Required YAO v0.10.2-beta)

Docs: https://github.com/YaoApp/website-doc-zh-CN/tree/v0.10.2/%E5%9F%BA%E7%A1%80

## Yao 0.10.2 Download

### Linux

https://github.com/YaoApp/yao/actions/runs/3486012987

### MacOS

https://github.com/YaoApp/yao/actions/runs/3486017760

### Docker

```bash
docker run -d  --name yao-0.10.2 -p 5099:5099 yaoapp/yao:0.10.2-amd64-dev
docker exec -it  yao-0.10.2 /bin/bash
```

```bash
yao start
```

## Install

```bash
yao get yaoapp/demo-app
yao start
```

## New Features

### App & Login

https://github.com/YaoApp/demo-app/blob/main/app.json

https://github.com/YaoApp/demo-app/blob/main/logins/admin.login.json

### New Table & Form & Chart

#### Bind

https://github.com/YaoApp/demo-app/tree/main/tables/bind

https://github.com/YaoApp/demo-app/tree/main/forms/bind

#### Cloud props $xxx

https://github.com/YaoApp/demo-app/blob/main/tables/pet.tab.json

#### Compute

https://github.com/YaoApp/demo-app/blob/main/tables/compute.tab.json

#### Action

https://github.com/YaoApp/demo-app/blob/main/tables/compute.tab.json#L41

### FileSystem JS API & Processes

```javascript
var fs = new FS("system"); // /app_root/data
var data = fs.ReadFile("/test.txt"); // /app_root/data/xxx
return data;
```

https://github.com/YaoApp/gou/blob/main/runtime/yao/objects/fs_test.go

### Schema JS AP & Processes

https://github.com/YaoApp/gou/blob/main/schema_test.go

### Yao Service

https://github.com/YaoApp/demo-app/tree/main/services

Action

```json
{
  "title": "测试云函数",
  "icon": "icon-cloud",
  "action": {
    "Service.foo": { "method": "Bar", "args": ["{{id}}", "{{name}}"] }
  }
}
```

### Studio CLI

https://github.com/YaoApp/demo-app/tree/main/studio

Command

```bash
yao studio run hello.World hi
```

Action

```json
{
  "title": "测试Studio",
  "icon": "icon-layers",
  "action": {
    "Studio.hello": {
      "method": "World",
      "args": ["{{id}}", "{{name}}"]
    }
  }
}
```

DSL FS

```javascript
var fs = new FS("dsl"); // /app_root (!/app_root)
var data = fs.ReadFile("/models/test.mod.json"); // /app_root/models/test.mod.json
return data;
```

Script FS

```javascript
var fs = new FS("script"); // /app_root (!/app_root/scripts)
var data = fs.ReadFile("/test.js"); // /app_root/scripts/test.js
return data;
```

### Yao Get CLI

```bash
cd project_root
yao get yaoapp/demo-app
```

### Setup UI

```bash
cd project_root
yao start
```
