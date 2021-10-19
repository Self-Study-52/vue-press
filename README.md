# vue-press

## quick use

enviroment:

- Node.js v12+

## install

**step one**: create a floder 

~~~shell
mkdir vuepress-starter;
cd vuepress-starter;
~~~

**step two**: initialization the project

~~~git
git init
~~~

**step three**: install VuePress at local

~~~shell
npm install -D vuepress@next
~~~

**step four**: add some settings in `package.json`

~~~json
{
    "script":{
        "docs:dev":"vuepress dev docs",
        "docs:build":"vuepress build docs"
    }
}
~~~

**step five**: set the `.gitignore`, add `node_modules`、`.temp`、`.cache` into it

~~~js
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
~~~

**step six**: create a markdown file

~~~shell
mkdir docs
echo "# Hello VuePress" > docs/README.md
~~~

**step seven**: use locality serveer to develop you docs web

~~~js
npm run docs:dev
~~~