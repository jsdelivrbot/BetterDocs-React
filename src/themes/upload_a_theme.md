---
title: Upload a Theme
sub: Uploading a theme is as easy as 1, 2, 3...uhh and maybe more.
---
# Steps
There are only three major steps :)

1. [Create a new file](https://github.com/MrRobotjs/BetterDocs/new/gh-pages/_themes)
2. Name has to **match** your theme name. 
    > Make sure it's a markdown file ".md"
3. Follow the following format for the file
    > Anything that has a ```#*``` is a ***requirement!***
```md
---
  # [REQUIRED]
  title: {Theme Name}
  #PLACEHOLDER
  # [REQUIRED]
  author: {Author Name}
  #PLACEHOLDER
  # [REQUIRED] - Short paragraph describing the content and/or purpose of the theme that will appear in the permalink of your page and other places on the site
  description:
    A Description
  #PLACEHOLDER
  # [REQUIRED] - Github isn't required but if it isn't used then further inspection will happen
  download: https://github.com/
  #PLACEHOLDER
  # [OPTIONAL]
  github: https://github.com/{Author Name}/
  #PLACEHOLDER
  # [OPTIONAL] - A link to allow people to get support or give feedback for the theme
  support:
  #PLACEHOLDER
  # [OPTIONAL] - The demo needs to be a direct link to the theme's file. Rawgit is recommended
  demo: https://rawgit.com/
  #PLACEHOLDER
  # [OPTIONAL]- For demo only. This chooses if you want the Light or Dark discord demo for your theme. Lowercase is only allowed. 
  style: dark
  #PLACEHOLDER
  # [OPTIONAL] - Tags are in an array and can seperate plugin with commas ","
  tags: [tag,tag2]
  #PLACEHOLDER
  # [REQUIRED] - Images previewing your theme
  images:
    - name: {Theme Name} Preview
      image: https://imgur.com/upload # Direct image link should only be used here. Imgur isn't required but if it isn't used then further inspection will happen
    - name: {Theme Name} Preview - {Image Name}
      image: https://imgur.com/upload # Direct image link should only be used here. Imgur isn't required but if it isn't used then further inspection will happen
  #PLACEHOLDER
  # [REQUIRED] - LEAVE AS IS
  ghcommentid: #0
  #PLACEHOLDER
  # [REQUIRED] - LEAVE AS IS
  layout: product #* DON'T CHANGE
---
  # A full description of your theme. All Markdown is allowed.
```
  4. Submit. You're done!