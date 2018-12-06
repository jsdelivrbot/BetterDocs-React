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
  title: {Plugin Name}
  author: {Author Name}
  description: A Description
  download: https://github.com/
  github: https://github.com/{Author Name}/
  support:
  tags: [tag,tag2]
  software: [BandagedBD,EnhancedDiscord,DiscordInjections,BeautifulDiscord,BetterDiscord]
  images:
    - name: {Plugin Name} Preview
      image: https://imgur.com/upload # Direct image link should only be used here. Imgur isn't required but if it isn't used then further inspection will happen
    - name: {Plugin Name} Preview - {Image Name}
      image: https://imgur.com/upload # Direct image link should only be used here. Imgur isn't required but if it isn't used then further inspection will happen
  ghcommentid: #0
  layout: product #* DON'T CHANGE
---
  # A full description of your plugin. All Markdown is allowed.
```
  4. Submit. You're done!

# Helpful information
Here's is some helpful information to inform you what each field does.
  - **title** - The name of your plugin. `[REQUIRED]`
  - **author** - The name of the author of the plugin. `[REQUIRED]`
  - **description** - Short paragraph describing the content and/or purpose of the plugin that will appear in the permalink of your page and other places on the site. `[REQUIRED]`
  - **download** - The direct link to the file to be downloaded. `[REQUIRED]`
  - **github** - The link to your [Github](https://github.com/) profile. `[OPTIONAL]`
  - **support** - A link to allow people to get support or give feedback for the Plugin. `[OPTIONAL]`
  - **tags** - Tags are in an array and can be seperated with commas "," like so `[tag1,tag2]`. `[OPTIONAL]`
  - **software** - The list of softwares your plugin supports. They are sorted in an array and seperated by commas "," like so `[tag1,tag2]`. `[REQUIRED]`
  - **images** - A list of images that show a preview of your plugin. [Imgur](https://imgur.com) is highly recommended for compressed images and reliability. `[OPTIONAL]`
  - **ghcommentid** - ~~The ID of the issue related to your plugin so it can be used in our comments system~~. `[REQUIRED]` 
  - **layout** - Used by the [Jekyll](https://api.github.com/repos/MrRobotjs/BetterDocs/) version of this website. `[REQUIRED]` 

## Changed your mind / need to edit your submission?
If you want to edit anything in your submission later, simply edit the .md file by submitting another PR.