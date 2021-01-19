<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
       <li><a href="#front-end-demo">Front End Demo</a></li>
       <li><a href="#related-projects">Related Projects</a></li>      
      </ul>
    </li>
    <li>
      <a href="#Designing-the-backend">Designing The Backend</a>
      <ul>
        <li><a href="#stress-tested-and-scaled-with">Stress Tested And Scaled With</a></li>
        <li><a href="#choosing-a-database">Choosing A Database</a></li>
        <li><a href="#stress-testing-locally">Stress Testing Locally</a></li>
        <li><a href="#stress-testing-and-scaling-deployed-service">Stress Testing And Scaling Deployed Service</a></li>
      </ul>
    </li>
    <li><a href="#results">Results</a></li> 
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- About the project -->
## About The Project

In this project, I worked with a team of engineers in designing a complex backend system for a legacy codebase to prepare the service for production level traffic. I worked on scaling the tours component of the service which enabled the user to view the most popular tours for their destination and sort through them with a variety of categories. I have provided a demo of the legacy front-end to give a better description of the component. As I was working with the backend, the folders I did the majority of the work in are in the database, dataGen, server, and some work on the client with small front-end refactors. 

In order to scale the component, I began by performing multiple stress tests to simulate high user traffic using Loader.io and monitored my response information using New Relic. After recording the initial maximum load of the component, I proceeded to horizontally scale my service using an NGINX load balancer and also vertically scale my database. In the end, I was able to increase the servers maximum requests per minute by 760% to 114,000. My methods for this are explained in greater detail in the Designing The Backend section.

Project Link: [https://github.com/trips-ahoy/tours-service](https://github.com/trips-ahoy/tours-service)

<!-- Front End Demo -->
### Front End Demo

![til](./TripsAhoyToursService.gif)

<!-- Related Projects -->
### Related Projects

* [Slam Dunk Supplies Related Items](https://github.com/Slam-Dunk-Supplies/related-items)
* [Slam Dunk Supplies Checkout](https://github.com/Slam-Dunk-Supplies/add-to-bag)
* [Slam Dunk Supplies Reviews](https://github.com/Slam-Dunk-Supplies/customer-reviews)

<!-- Designing the Backend -->
## Designing the Backend

<!-- Stress Tested And Scaled With -->
### Stress Tested And Scaled With

* [PostgresSQL](https://www.postgresql.org/)
* [k6](https://k6.io/)
* [New Relic](https://newrelic.com/)
* [Loader.io](https://loader.io/)
* [NGINX Load Balancer](https://www.nginx.com/?_ga=2.158389434.1677834339.1611021376-367796849.1611021376)
* [AWS EC2](https://aws.amazon.com/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc)

<!-- Choosing A Database -->
### Choosing A Database

<!-- Stress Testing Locally -->
### Stress Testing Locally

<!-- Stress Testing And Scaling Deployed Service -->
### Stress Testing And Scaling Deployed Service

<!-- Results -->
## Results

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


