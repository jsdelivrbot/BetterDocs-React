---
title: Upload a Plugin
sub: Uploading a plugin is as easy as 1, 2, 3...uhh and maybe more.
software: [BandagedBD,EnhancedDiscord,DiscordInjections,BeautifulDiscord,BetterDiscord]
---
# Submit your work
Want to submit your theme to our [Showcase](https://betterdocs.us/plugins/)? Follow these instructions slow & carefully.

## Steps
I promise it doesn't take long :)

1. [Create a new file](https://github.com/MrRobotjs/BetterDocs/new/gh-pages/_Plugins)
2. Name has to **match** your Plugin name. 
    > Make sure it's a markdown file ".md"
3. Follow the following format for the file
```md
---
  # [REQUIRED]
  title: {Plugin Name}
  #/
  # [REQUIRED]
  author: {Author Name}
  #/
  # [REQUIRED] - Short paragraph describing the content and/or purpose of the plugin that will appear in the permalink of your page and other places on the site
  description: A Description
  #/
  # [REQUIRED] - Github isn't required but if it isn't used then further inspection will happen
  download: https://github.com/
  # [OPTIONAL]
  github: https://github.com/{Author Name}/
  #/
  # [OPTIONAL] - A link to allow people to get support or give feedback for the Plugin
  support:
  #/
  # [OPTIONAL] - Tags are in an array and can seperate plugin with commas ","
  tags: [tag,tag2]
  #/
  # [REQUIRED] - The list of softwares your plugin supports (remove if you don't support it)
  software: [BandagedBD,EnhancedDiscord,DiscordInjections,BeautifulDiscord,BetterDiscord]
  #/
  # [OPTIONAL]
  images:
    - name: {Plugin Name} Preview
      image: https://imgur.com/upload # Direct image link should only be used here. Imgur isn't required but if it isn't used then further inspection will happen
    - name: {Plugin Name} Preview - {Image Name}
      image: https://imgur.com/upload # Direct image link should only be used here. Imgur isn't required but if it isn't used then further inspection will happen
  #/
  # [REQUIRED] - LEAVE AS IS
  ghcommentid: #0
  #/
  # [REQUIRED] - LEAVE AS IS
  layout: product #* DON'T CHANGE
---
  # A full description of your plugin. All Markdown is allowed.
```
  4. Submit. You're done!

## Changed your mind / need to edit your submission?
If you want to edit anything in your submission later, simply edit the .md file by submitting another PR.