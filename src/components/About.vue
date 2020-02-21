<template>
    <div class="about">
        <main class="wrapped">
            <h2>Damien Smagghe ?</h2>
            <div class="about__blocks">
                <div class="abilities">
                    <h3>Main abilities</h3>
                    <ul>
                        <li>
                            <p><span>Web stack :</span> HTML5, CSS, Modern Javascript (es6+), Node.js, SQL/PLSQL.</p>
                        </li>
                        <li>
                            <p><span>Vue.js/ Angular 8 :</span> This is my main frameworks that i enjoy working with in Javascript.</p>
                        </li>
                        <li>
                            <p><span>Anime.js | D3.js | Chart.js :</span> The librairies I use the most in Javascript.</p>
                        </li>
                        <li>
                            <p><span>Web-scrapping :</span>Using Pupeeter.js</p>
                        </li>
                        <li>
                            <p><span>Useful :</span> I'm used to Docker containerisation. I also know how to design UI & UX thanks to my various projects and I'm used to work in agile with Trello, Slack and Notion.</p>
                        </li>
                    </ul>
                </div>
                <div class="passions">
                    <h3>Passions and personnality</h3>
                    <ul>
                        <li>
                            <p>
                                I attach great importance to <span>relationships</span>. I try to make communication as efficient as possible. it helps me in my work because i easily communicate with me collaborators. It really is an important thing when working in remote freelancing. I <span>communicate</span> to offer the solution my clients needs.
                            </p>
                        </li>
                        <li>
                            <p>
                                I am also passionate about sports (<span>Thai boxing, diving, sailing</span>) and the AI/data-analysis environment which I study at ESGI. If you want to talk sport or tech do not hesitate to <span>leave a message</span>.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="about__resume">
                <a class='animated-arrow' href='../../static/cv.pdf' download>
                <span class='the-arrow -left'>
                        <span class='shaft'></span>
                </span>
                <span class='main'>
                  <span class='text'>Download my resume</span>
                <span class='the-arrow -right'>
                    <span class='shaft'></span>
                </span>
                </span>
            </a>
            </div>
        </main><app-footer></app-footer>
    </div>
</template>
<script>
import Footer from './core/Footer'
export default {
    name: 'about',
    components: {
        'app-footer': Footer
    }
}
</script>
<style>
.about {
    min-height: 75vh;
    position: absolute;
}
 .about h2 {
     font-size: 2.5rem;
     font-family: Playfair;
     font-weight: bold;
     margin-top: 2rem;
     margin-bottom: 4rem;
 }
 .about .about__blocks {
     display: flex;
     justify-content: space-between;
 }
 .about .abilities, .about .passions {
     width: 44%;
 }
 .about .about__blocks h3 {
     font-family: Playfair;
     font-weight: bold;
     color: #1C23F5;
     font-size: 1.5rem;
     margin-bottom: 2rem;
 }
 .about .about__blocks li {
     margin-bottom: 1rem;
 }
 .about .about__blocks p {
     font-size: 0.8rem;
     line-height: 1.5;
     letter-spacing: 0.02rem;
 }
 .about .about__blocks p span {
     color: #1C23F5;
     font-weight: bold;
 }
 .about__resume {
     margin: 1rem 0 4rem 0;
 }
 @media screen and (max-width: 1040px) {
     .about .about__blocks {
         flex-direction: column;
     }
      .about .abilities, .about .passions {
        width: 100%;
        margin-bottom: 2rem;
 }
  @media screen and (max-width: 660px) {
      .about h2 {
          font-size: 2rem;
      }
  }
 }
</style>


