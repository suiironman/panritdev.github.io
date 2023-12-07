import React from "react";
import Type from "./Type";
function Hero() {
  return (
    <section id="home" className="py-20 max-w-max grid grid-cols-2 gap-x-20 items-center">
      <div className="space-y-7 max-w-2xl">
        <h1 className="lg:text-7xl md:text-5xl sm:text-3xl  font-bold"><Type /></h1>
        <p className="lg:text-2xl md:text-xl sm:text-base">
          a ReactJS enthusiast crafting projects and constantly learning and
          growing. Come take a look at my work!
        </p>
        
        <button className="btn btn-lg sm:btn-sm md:btn-md lg:btn-lg font-light">
        <a className="scroll-smooth" href="#project">See Work</a>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </button>
      </div>

      {/* Mockup-code */}
      <div className="mockup-code lg:text-base md:text-sm sm:text-xs" >
        <pre>
          <code>import React from 'react';</code>
        </pre>
        <pre>
          <code>import &#123; Button &#125; from 'daisyui';</code>
        </pre>
        <pre>
          <code>import &#123; Container, Section &#125; from 'flowbite';</code>
        </pre>
        <pre></pre>
        <pre>
          <code>const PortfolioIntroduction = () =&gt; &#123;</code>
        </pre>
        <pre>
          <code> return (</code>
        </pre>
        <pre>
          <code>   &lt;div className="portfolio"&gt; </code>
        </pre>
        <pre>
          <code>     &lt;h1&gt;Hi there! I'm Panrit,&lt;/h1&gt; </code>
        </pre>
        <pre>
          <code>
            {"     "}
            &lt;p&gt;a ReactJS enthusiast crafting projects and constantly
            <pre>
              {"        "}learning and growing. Come take a look at my
              work!&lt;/p&gt;
            </pre>
          </code>
        </pre>
        <pre></pre>
        <pre>
          <code>     &lt;h2&gt;Tools I Use&lt;/h2&gt; </code>
        </pre>
        <pre>     &lt;ul&gt;</pre>
        <pre>
          <code>       &lt;li&gt;ReactJS - For building websites and applications&lt;/li&gt; </code>
        </pre>
        <pre>
          <code>       &lt;li&gt;Tailwind CSS - For styling and designing content&lt;/li&gt; </code>
        </pre>
        <pre>
          <code>       &lt;li&gt;DaisyUI - For quickly creating UI components&lt;/li&gt; </code>
        </pre>
        <pre>
          <code>       &lt;li&gt;Flowbite - Tool for managing web page structures&lt;/li&gt; </code>
        </pre>
        <pre>     &lt;ul&gt;</pre>
        <pre></pre>
        <pre>
          <code>     &lt;h2&gt;Contact Me&lt;/h2&gt; </code>
        </pre>
        <pre>
          <code>     &lt;p&gt;Email: panrit_lim@gmail.com&lt;/p&gt; </code>
        </pre>
        <pre>   &lt;/div&gt;...</pre>
        <pre> );</pre>
        <pre>&#125;;</pre>
      </div>
      {/* Mockup-code End */}
    </section>
  );
}

export default Hero;
