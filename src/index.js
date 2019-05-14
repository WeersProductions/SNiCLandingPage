import "./styles.scss";

document.getElementById("app").innerHTML = `
<div class="container primary">
  <h1>What is SNiC</h1>
  <button onclick="window.open('https://snic-singular.it/','_blank')" class="previous__snics">Last congress</button>
  <p>SNiC is an acronym for Stichting Nationaal informatica Congres (Foundation National Computer Science congress). The organisation was established in 2004 with the purpose of stimulating the interest in IT knowledge, IT applications and the business side of IT. Every year, a congress with an IT related subject is organised for academic computer science students from all over the Netherlands. For each congress one study association is chosen to take care of the organisation. This year, the organisation is in the hands of study association Inter-Actief.</p>
</div>
<div class="container secondary">
  <h1>Theme</h1>
  <p>
    The theme of this year’s congress is ResilIT: the impact of IT in preservation and recuperation of our society. During the past decennia humanity has made huge advancements and is slowly moving towards what researchers have dubbed “Society 4.0”. However, how do we keep this society intact and how can we recover from disruptive events?
  </p>
  <br>
  <p>
    With an increase in population size and complex IT systems, the state of our society is becoming increasingly fragile. This has created the important but difficult task of maintaining the environment we have created. The congress will investigate different areas of this problem including disaster management, cyber threat management and in general at Society 4.0. With varying talks, the aim of ResilIT is to inspire visitors to rethink how fragile their position in the world is and how IT can be used to improve the safety of our society.
  </p>
</div>
<div class="container primary">
  <h1>Location</h1>
  <div class="location">
    <div>
      <p>
      The congress will be held in the Flint in Amersfoort.
      </p>
      <br>
      <a href="https://goo.gl/maps/gdLM6MsJP1CALrXb6" target="_blank">
        <p>
          Get directions
          <i class="fas fa-location-arrow"></i>
        </p>
      </a>
    </div>
    <div class="location__imagecontainer">
      <img src="../resources/flint_zaal.jpg"/>
    </div>
  </div>
</div>
<div class="container secondary">
  <h1>The committee</h1>
  <div class="contact">
    <div class="contact__person">
      <img onclick="window.open('https://www.linkedin.com/in/sander-meinderts-295aa1139/','_blank')" class="thumbnail" src="../resources/SanderMeinderts.jpeg"/>
      Sander Meinderts
      <div class="subtitle">Officer of Speakers</div>
    </div>
    <div class="contact__person">
      <img onclick="window.open('https://www.linkedin.com/in/floris-weers-61392b160/','_blank')" class="thumbnail" src="../resources/SanderMeinderts.jpeg"/>
      Floris Weers
      <div class="subtitle">Secretary and Officer of Promotion</div>
    </div>
    <div class="contact__person">
      <img onclick="window.open('https://snic-singular.it/','_blank')" class="thumbnail" src="../resources/SanderMeinderts.jpeg"/>
      Sander Meinderts
      <div class="subtitle">Promo</div>
    </div>
    <div class="contact__person">
      <img onclick="window.open('https://snic-singular.it/','_blank')" class="thumbnail" src="../resources/SanderMeinderts.jpeg"/>
      Sander Meinderts
      <div class="subtitle">Speakers</div>
    </div>
    <div class="contact__person">
      <img onclick="window.open('https://snic-singular.it/','_blank')" class="thumbnail" src="../resources/SanderMeinderts.jpeg"/>
      Sander Meinderts
      <div class="subtitle">Speakers</div>
    </div>
    <div onclick="window.open('https://snic-singular.it/','_blank')" class="contact__person">
      <img class="thumbnail" src="../resources/SanderMeinderts.jpeg"/>
      Sander Meinderts
      <div class="subtitle">Speakers</div>
    </div>
    <div onclick="window.open('https://snic-singular.it/','_blank')" class="contact__person">
      <img class="thumbnail" src="../resources/SanderMeinderts.jpeg"/>
      Sander Meinderts
      <div class="subtitle">Speakers</div>
    </div>
    <div onclick="window.open('https://snic-singular.it/','_blank')" class="contact__person">
      <img class="thumbnail" src="../resources/SanderMeinderts.jpeg"/>
      Sander Meinderts
      <div class="subtitle">Speakers</div>
    </div>
  </div>
</div>
`;
