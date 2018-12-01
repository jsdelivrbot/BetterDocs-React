---
title: Upload a Plugin
sub: Uploading a plugin is as easy as 1, 2, 3...uhh and maybe more.
---
# Uploading a Plugin

1. [Create a new file](https://github.com/MrRobotjs/BetterDocs/new/gh-pages/_Plugins)
2. Name has to **match** your Plugin name. 
    > Make sure it's a markdown file ".md"
3. Follow the following format for the file
    > Anything that has a ```#*``` is a ***requirement!***
```md
---
  title: {Plugin Name} #*
  author: {Author Name} #*
  description: #* Markdown is allowed
    A Description
  download: https://github.com/ #* Github isn't required but if it isn't used then further inspection will happen
  github: https://github.com/{Author Name}/
  support: # A link to allow people to get support or give feedback for the Plugin
  tags: [tag,tag2] # Tags are in an array and can seperate theme with commas ","
  software: [BandagedBD,EnhancedDiscord,DiscordInjections,BeautifulDiscord,BetterDiscord] # The list of softwares your plugin supports (remove if you don't support it)
  images:
    - name: {Plugin Name} Preview
      image: https://imgur.com/upload # Direct image link should only be used here. Imgur isn't required but if it isn't used then further inspection will happen
    - name: {Plugin Name} Preview - {Image Name}
      image: https://imgur.com/upload # Direct image link should only be used here. Imgur isn't required but if it isn't used then further inspection will happen
  ghcommentid: #0
  layout: product #* DON'T CHANGE
---
```
  4. Submit. You're done!

# Adding comments

  1. Todo
