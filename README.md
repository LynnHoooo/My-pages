# My-pages

个人主页项目，基于 `HTML + CSS + JS` 搭建。

## 常改文件

- `index.html`
- `style.css`
- `script.js`
- `projects/` 里的项目详情页

## 修改后如何推送到 GitHub

在项目目录 `d:\baoyan\pages` 打开 PowerShell，然后按下面顺序执行：

```powershell
git status
git add .
git commit -m "写一句这次修改的说明"
git push origin main
```

## 推荐用法

如果你只是改了网页内容，常见提交说明可以这样写：

```powershell
git commit -m "Update homepage content"
```

或者：

```powershell
git commit -m "Adjust layout and copy"
```

## 更稳妥的推送方式

如果你不想把无关文件一起传上去，可以只添加你改过的网页文件：

```powershell
git add index.html style.css script.js
git add projects\*.html
git commit -m "Update site"
git push origin main
```

## 推送前先检查

```powershell
git status
```

你可以重点看两种状态：

- `M`：表示这个文件被修改了
- `??`：表示这个文件还没有被 Git 跟踪

如果看到一些你不想上传的文件，不要直接 `git add .`，改成只 `add` 你要上传的文件。

## 如果 push 失败

可以先重新执行：

```powershell
git push origin main
```

如果提示需要先同步远程更新，再执行：

```powershell
git pull --rebase origin main
git push origin main
```

## 查看提交记录

```powershell
git log --oneline -5
```

这会显示最近 5 次提交，方便确认是否已经成功提交和推送。
