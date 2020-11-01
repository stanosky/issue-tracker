# issue-tracker

## Foreword

I'll be honest with you. Finishing of this taks took me around 12 hours. That included preparations, documentation reading (for libs which I'm not familiar with) and testing of concepts. Also, there were some things I wasn't sure about. For example, I was wondering if "the code should be testable" requirement does mean that the sources should include tests or rather that code have to be structured in a manner which allow testing it? That's why I added integration with Jest, and I wrote couple simple tests. Moreover, I assumed that there were no need for implementing of HTTPS protocol and authorisation concepts.

## What has been done

I started from preparing some boilerplate code for running code locally. That included setup for Webpack, preparing the structure of folders and adding initial code for the frontend and backend. Then I created static response from a server (without use of database) with initial data. On frontend part I did setup for Redux store and things related to it e.g. Sagas. Then I have focused on the frontend part, and I started building components and containers for displaying list of issues. I planned to use router for switching between views, so I added it at the very beginning. Generally I created three views but actually two of them (one for creation and one for updating issues)  were instances of the one component created with use of two slightly different containers. In mean time I created Sagas for communication with a server and updating local state. When I finished the frontend part I focused on the backend. First I have added integration with MongoDB. Then one by one I started adding missing endpoints, a one for issue creation and the second for updating existing issues. When I finished both parts I started doing integration with Jest. Finally, I added couple simple unit tests for UI components.

## What can be improved

Short answer is - a lot ;), but to be specific:
1. I would add missing unit tests. Especially for backend part.
1. Linting of code before a commit.
1. Possibility to configure project by environment variables or injected config files.
1. Adding route-guards to avoid unauthorised access.
1. Adding communication over HTTPS.
1. Possibility to logging-in and adding issues for multiple users.
1. I could try to refactor code with use fo React hooks.
1. And many, many more...

## Summary

This task wasn't hard, but for sure it was challenging from the perspective of my experience so far as frontend developer. Still, I have a lot to learn, and I see that my pace wasn't as good as the average. However, it was good exercise for me and test of my existing skills. I'm happy I managed to finish it.
