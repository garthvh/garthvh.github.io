---
layout: page
title: About
summary: Site Setup Details
fullwidth: true
---
### Styles

For the site styles I am trying to use as little of my own custom css as possible and lean on bootstrap and font awesome, almost everything is standard Bootstrap 3 or font awesome markup.

* CDN Hosted [Bootstrap](http://www.bootstrapcdn.com/) styles and javascript
* CDN Hosted Flatly Bootstrap Theme by [Bootswatch](http://www.bootstrapcdn.com/#bootswatch_tab)
* CDN Hosted [Font Awesome Icons](http://www.bootstrapcdn.com/#fontawesome_tab) and styles

### Content Management

After years of developing my own content management systems I have completely switched to markdown for security and ease of use.  Using the github Atom editor primarily. The content of this static site is built out using Jekyll for Github Pages.

I also stole some of the site structure and github connected features from @haacked after reading about them on his blog.

* Built for [Jekyll](http://jekyllrb.com)
* Content built with markdown
* Developed on GitHub and hosted for free on [GitHub Pages](https://pages.github.com)
* Custom domain registered with GoDaddy

### Github Features

* [Contact Link]({{ site.url }}contact) opens an issue.
* Edit link on each post creates a pull request (in progress)


### Site Features

I have been really impressed with using GitHub Pages and Jekyll to build out a nice static site with templates. The following features have been added to the blog and are built out dyanamically when the site is pushed to github.

* [Sitemap File]({{ site.url }}sitemap.xml})
* [Humans File]({{ site.url }}humans.txt})
* [Robots File]({{ site.url }}robots.txt})
* [RSS Feed]({{ site.url }}atom.xml})
* [Archives Page]({{ site.url }}atom.xml})
* Disqus Comments
* AddThis Sharing link
