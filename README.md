<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
       <li><a href="#front-end-demo">Front End Demo</a></li>
       <li><a href="#stress-tested-and-scaled-with">Stress Tested And Scaled With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation-and-starting-the-project">Installation</a></li>
        <li><a href="#view-testing-suite">Test Suite</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- About the project -->
## About The Project

In this project, I worked with a team of engineers in designing a complex backend system for a legacy codebase to prepare the service for production level traffic. I worked on scaling the tours component of the service which enabled the user to view the most popular tours for their destination and sort through them with a variety of categories. I have provided screenshots of the legacy front-end to give a better description of the component.

In order to scale the component, I began by performing multiple stress tests to simulate high user traffic using Loader.io and monitored my response information using New Relic. After recording the initial maximum load of the component, I proceeded to horizontally scale my service using an NGINX load balancer and also vertically scale my database. In the end, I was able to increase the servers maximum requests per minute by 760% to 114,000.

Project Link: [https://github.com/trips-ahoy/tours-service](https://github.com/trips-ahoy/tours-service)

<!-- Front End Demo -->
## Front End Demo

<img src="./FrontEndImg1.png" width="200px" height="200px"/>
<img src="./FrontEndImg2.png" width="200px" height="200px" display:"inline-block"/>

<!-- Stress Tested And Scaled With -->
### Stress Tested And Scaled With

* [React](https://reactjs.org)
* [Express](http://expressjs.com/)
* [Axios](https://www.npmjs.com/package/axios)
* [Styled Components](https://styled-components.com/)
* [MongoDB](https://www.mongodb.com/)
* [AWS S3](https://aws.amazon.com/s3/)
* [Jest](https://jestjs.io/)


<!-- CONTACT -->
## Contact

<!-- LinkedIn Contact -->
<a href="https://www.linkedin.com/in/ecetino/" target="_blank">
  <img src="https://img.shields.io/badge/-Edgar%20Cetino-blue?style=for-the-badge&logo=Linkedin&logoColor=white"/>
</a>
  
<!--   Email -->
<a href="mailto:cetino-e@hotmail.com">
  <img src="https://img.shields.io/badge/EMAIL-cetino--e%40hotmail.com-1152ba?style=for-the-badge"/>
</a>


