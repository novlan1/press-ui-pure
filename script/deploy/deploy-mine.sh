#!/bin/sh

set -x

cd dist/project/press-ui-pure/static
git init

repoName=press-ui-pure
userName=novlan1
token=$1

git config user.email "1576271227@qq.com"
git config user.name "novlan1"

git remote remove origin
git remote add origin https://${token}@github.com/${userName}/${repoName}

git add .
git commit -m"docs: 文档构建"
# git checkout -b docs
# git push origin --force
git push origin master --force
