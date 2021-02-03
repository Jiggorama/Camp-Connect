# Camp Connect

## Overview

_**Camp Connect**_ is a campsite tracking tool for Green Ridge state forest in Flinstone MD.  The User will be able to track which campsites of the 100 available sites at the park they have visited.  Each campsite will have an overview screen with details and features about that site.  Users can leave comments on specific site as well as edit and delete those comments. This application is built with the React on Rails framework utilizing a Ruby on Rails backend and a React frontend UI.
<br>

### Deployed Urls

- Frontend
- https://camp-connect.netlify.app/
- Backend
- https://campconnect-api.herokuapp.com/sites

## MVP

- User Auth
- Campsite detail page with rendered comments
- User can leave comments about a campsite


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

- Post and Edit Comment(Signed In)

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
| Back end build  |    H     |     3 hrs      |     3hrs     |     3hrs     |
| Back end controllers  |    H     |     3 hrs      |     3hrs     |     6hrs     |
|Back end Auth |    H     |     3 hrs      |     2hrs    |     8hrs     |
| Campsite seed data |    H     |     3 hrs      |    1hr     |     9hrs     |
| Landing Page |    H     |     3 hrs      |     3hrs     |     12hrs     |
| List all sites |    H     |     3 hrs      |     2hrs     |     14hrs     |
| SiteDetail |    H     |     3 hrs      |     2hrs     |     16hrs     |
| FrontendAuth |    H     |     3 hrs      |     2hrs     |     18hrs     |
| RenderComments |    H     |     3 hrs      |     3hrs     |     21hrs     |
| Services Api Calls |    H     |     3 hrs      |     3hrs     |     24hrs     |
| Edit comments |    H     |     3 hrs      |     3hrs     |     27hrs     |
| Delete Comments |    H     |     3 hrs      |     3hrs     |     30hrs     |
| Landing Page styling|    H     |     3 hrs      |     3hrs     |     33hrs     |
| List all sites styling|    H     |     3 hrs      |     2hrs     |     35hrs     |
| SiteDetail styling|    H     |     3 hrs      |     2hrs     |     37hrs     |
| RenderComments styling|    H     |     3 hrs      |    2hrs      |     39hrs     |
| Advanced Css |    H     |     3 hrs      |     --     |     39hrs     |
| TOTAL               |          |     51 hrs      |    39hrs     |     39hrs     |


<br>

### Server (Back End)

#### ERD Model

> - link https://drive.google.com/file/d/1SsiPgVlNviloDpPXeP23vMPld5kxWtPw/view?usp=sharing

> ![imageAlt](https://i.imgur.com/AuoN2Uy.png)

<br>

***

## Post-MVP

> Able to sort campsites by features
> Indicate which site are visited on site listing screen
> Search and sort functionality

***

## Code Showcase

> Conditional rendering on my site detail page.
```<>
    { campsite &&  
      
      <div className='site-detail'>
        <div className='img-container'>
          <img src={campsite.image} alt='No Image Provided' />
        </div>
        <div className='info-container'>
          <div className='sidebyside'>
          <div className='site-name'>{campsite.name}</div>
          {user && <>
            {campsite.users.some(camper => {
              return camper.id === user.id
            }) ?
            <div className = 'visited'>
                <div className='yes'>Visited</div>
                <div onClick={removeVisited} className='icon'><RemoveCircleOutlineIcon/></div>
              </div> :
              <div className = 'visited'>
                <div className='no'>Visited?</div>
                <div onClick={addVisited} className='icon'><AddCircleOutlineIcon/></div>
              </div>
            }
          </>}
          </div>
            <div className='description'>{campsite.description}</div>
        </div>
        <Comments campsite={campsite} user={user} setCampsite={setCampsite}/>
      </div>
    }
  </>```

## Code Issues & Resolutions

> Updating Campsite cuases rendering out of order
> Toggling visited changes comment render order
