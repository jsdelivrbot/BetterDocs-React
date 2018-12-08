---
title: Upload a Plugin
sub: Uploading a plugin is as easy as 1, 2, 3...uhh and maybe more.
software: [BandagedBD,EnhancedDiscord,DiscordInjections,BeautifulDiscord,BetterDiscord]
---
# Submit your work
Want to submit your plugin to our [Showcase](https://betterdocs.us/plugins/)? Follow these instructions slow & carefully.

## Steps
I promise it doesn't take long :)

1. [Create a new file](https://github.com/MrRobotjs/BetterDocs/new/gh-pages/_Plugins)
2. The name of the file is **required** to match your plugin name.
    > Make sure it's a markdown file `.md` and use kebab case stlye for the name.
3. Use the following template to ensure required fields are filled:
```md
---
  title: {Plugin Name}
  author: {Author Name}
  description: A SHORT Description
  download: https://github.com/
  github: https://github.com/{Author Name}/
  support:
  tags: []
  software: [BandagedBD,EnhancedDiscord,DiscordInjections,BeautifulDiscord,BetterDiscord]
  images:
    - name: {Plugin Name} Preview
      image: https://imgur.com/upload # Direct image link should only be used here. Imgur isn't required but if it isn't used then further inspection will happen
    - name: {Plugin Name} Preview - {Image Name}
      image: https://imgur.com/upload # Direct image link should only be used here. Imgur isn't required but if it isn't used then further inspection will happen
  status:
  auto:
  ghcommentid: # DON'T CHANGE
  layout: product # DON'T CHANGE
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
  - **github** - The link to your [Github](https://github.com/) profile. This will link your name right under the title of your plugin. `[OPTIONAL]`
  - **support** - A link to allow people to get support or give feedback for the Plugin. `[OPTIONAL]`
  - **tags** - Tags are in an array and can be seperated with commas "," like so `[tag1,tag2]`. `[OPTIONAL]`
  - **software** - The list of softwares your plugin supports. They are sorted in an array and seperated by commas "," like so `[BandagedBD,BeautifulDiscord,DiscordInjections,EnhancedDiscord,BetterDiscord]`. `[REQUIRED]`
  - **images** - A list of images that show a preview of your plugin. [Imgur](https://imgur.com) is highly recommended for compressed images and reliability. `[OPTIONAL]`
  - **status** - Values: `Updated/Oudated`. The current status of your plugin.
  - **auto** - If your plugin is hosted on [Github](https://github.com) then add `true` to allow users to automatically down the file (or even the entire repo) instead of just' visiting the site, if hosted elsewhere leave blank or remove it entirely. `[REQUIRED]`
  - **ghcommentid** - ~~The ID of the issue related to your plugin so it can be used in our comments system~~. `[REQUIRED]` 
  - **layout** - Used by the [Jekyll](https://github.com//MrRobotjs/BetterDocs/) version of this website. `[REQUIRED]` 

## Changed your mind / need to edit your submission?
If you want to edit anything in your submission later, simply edit the `.md` file by submitting another PR.

## Old website
The old website will always be up on [Github Pages](https://betterdocs.netlify.com/)