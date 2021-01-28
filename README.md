# Camp Connect

## Overview

_**Camp Connect**_ is a campsite tracking tool for Green Ridge state forest in Flinstone MD.  The User will be able to track which campsites of the 100 available sites at the park they have visited.  Each campsite will have an overview screen with details and features about that site.  Users can leave comments on specific site as well as edit and delete those comments. This application is built with the React on Rails framework utilizing a Ruby on Rails backend and a React frontend UI.


<br>

## MVP

- User Auth
- Campsite detail page with rendered comments
- User can leave comments about a campsite
- Search and sort campsites numerically

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end javascript library|
|   React Router   | Screen navigation for react |
|    Material UI   | Component library for react |
|   Ruby on Rails  | Backend framework for building databases |


<br>

### Client (Front End)

#### Wireframes

> - link https://whimsical.com/greenridgewires-Lwyc1cdQU62658aiwyACp7

- Landing and Search

![imageAlt](https://i.imgur.com/fBQNFf6.png)

- Sign up and Sign in

![imageAlt](https://i.imgur.com/a3cY09e.png)

- Site List and Site Detail

![imageAlt](https://i.imgur.com/B2Cf6jR.png)

- Post and Edit Comment

![imageAlt](https://i.imgur.com/4nYzxzU.png)

#### Component Tree

> - link https://whimsical.com/greenridgeflow-LedaW93NpWbsdptVXLmNTo

![imageAlt](https://i.imgur.com/NJSjCNa.png)

#### Component Hierarchy

``` structure

src
|__ Components/
      |__ search
      |__ DeleteComment
|__ Layout/
      |__ Header
      |__ Nav
      |__ Layout
      |__ footer
|__ Container/
      |__ Container
|__ Screens/
      |__ Landing
      |__ SignUp
      |__ SignIn
      |__ SiteList
      |__ SiteDetail
      |__ Comments
      |__ EditComment
 |__ Container/
      |__ ApiConfig
      |__ Users
      |__ Comments

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Back end build  |    H     |     3 hrs      |     --     |     TBD     |
| Back end controllers  |    H     |     3 hrs      |     --     |     TBD     |
|Back end Auth |    H     |     3 hrs      |     --    |     TBD     |
| Campsite seed data |    H     |     3 hrs      |    --     |     TBD     |
| Landing Page |    H     |     3 hrs      |     --     |     TBD     |
| List all sites |    H     |     3 hrs      |     --     |     TBD     |
| SiteDetail |    H     |     3 hrs      |     --     |     TBD     |
| FrontendAuth |    H     |     3 hrs      |     --     |     TBD     |
| RenderComments |    H     |     3 hrs      |     --     |     TBD     |
| Services Api Calls |    H     |     3 hrs      |     --     |     TBD     |
| Edit comments |    H     |     3 hrs      |     --     |     TBD     |
| Delete Comments |    H     |     3 hrs      |     --     |     TBD     |
| Landing Page styling|    H     |     3 hrs      |     --     |     TBD     |
| List all sites styling|    H     |     3 hrs      |     --     |     TBD     |
| SiteDetail styling|    H     |     3 hrs      |     --     |     TBD     |
| RenderComments styling|    H     |     3 hrs      |     --     |     TBD     |
| Advanced Css |    H     |     3 hrs      |     --     |     TBD     |
| TOTAL               |          |     51 hrs      |    --     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

> - link https://drive.google.com/file/d/1SsiPgVlNviloDpPXeP23vMPld5kxWtPw/view?usp=sharing

> ![imageAlt](https://i.imgur.com/AuoN2Uy.png)

<br>

***

## Post-MVP

> I want to be able to sort campsites by features

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
