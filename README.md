# LaBombaJS

This demo application is a demonstration of my JS skills. The idea is to display all dance events, schools, clubs and festivals related to dancing.  It's loaded with static data, but it can quite easily be adapted to work with real time data.

# Instructions
You can visit the app itself on [https://la-bomba.netlify.app/](https://la-bomba.netlify.app/).

You get the greeting message once you load the app.

![image](https://github.com/aleksbn/la-bomba-frontend-js/assets/44110941/28badc72-7574-4eef-acdb-f271ee0fb9aa)

![image](https://github.com/aleksbn/la-bomba-frontend-js/assets/44110941/210ea7aa-7a4e-4e60-930a-9fc74fcb4de6)

Interface consists of two parts:
1. First third of a window, on the left side, is for selecting data.
- You can scroll down to see dance schools, clubs etc.
- You can also click on the red arrows to switch to dance events.
- Once you click on the school/event, map will zoom in and give you some info about it.

![image](https://github.com/aleksbn/la-bomba-frontend-js/assets/44110941/1d8fcf99-5b02-4040-bb4a-850bf3adea21)

![image](https://github.com/aleksbn/la-bomba-frontend-js/assets/44110941/cb5e6cfb-b8cc-4350-bd84-a25b3f83fd99)

- If you're especially interested in any event, just press "Display details" button right below the map, and you'll get some more details:

![image](https://github.com/aleksbn/la-bomba-frontend-js/assets/44110941/d9287a0b-68da-4dc0-b45a-c192e84a895a)

- If you don't want to see every single dance type, or school type, you can filter them out by using "Show filters" button at the top of the left part of the window:

![image](https://github.com/aleksbn/la-bomba-frontend-js/assets/44110941/0fb24fc3-4526-4be9-9d59-6482512f2209)

- Click "Apply filters" and you'll see only those options you selected.

# Architectural consideration
1. Backend is entirely netlify service. It has no DB (althoug it can be easily introduced), no endpoints, nothing. Just pure JS hosting.
2. Frontend is entirely JS with leaflet 1.9.4 for displaying map.

Everything in the app is custom made.
