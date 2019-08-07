#!/usr/bin/env sh

set -e
npm run build:comment

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:souche-finance-wireless/department-blog.git master:gh-pages

cd -
