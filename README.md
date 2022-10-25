# demo-app

Demo YAO App (Required YAO v0.10.2-beta)

## Yao 0.10.2 Download

Linux

https://github.com/YaoApp/yao/actions/runs/3317780174

MacOS

https://github.com/YaoApp/yao/actions/runs/3317780577

## Install

```bash
yao migrate
yao run scripts.demo.Data
```

## New Features

### App & Login

https://github.com/YaoApp/demo-app/blob/main/logins/admin.login.json

https://github.com/YaoApp/demo-app/blob/main/app.json

### New Table & Form & Chart

### Bind

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
yao studio run foo.Bar hello
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
