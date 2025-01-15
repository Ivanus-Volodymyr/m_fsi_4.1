npm run build

cd build

git init

git remote add origin https://github.com/Ivanus-Volodymyr/qwerty.git
git config user.email "ivanys230796@gmail.com"
git config user.name "Ivanus-Volodymyr"

git branch -M gh-pages

git pull origin gh-pages

git add .

git commit -m "build"

git push -f origin gh-pages
