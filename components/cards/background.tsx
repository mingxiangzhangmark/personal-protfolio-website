
import Card from "../ui/card";

export default function BackgroundCard() {
  return (
    <Card  className="md:h-full" title="My Background">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
          Born and raised in the vibrant city of &nbsp;
          <span className="text-white underline">Beijing, China</span>, my
          journey began in an environment teeming with culture and innovation. 
          Today, as a &nbsp;
          <span className="text-white underline">
            graduate student at the University of Sydney
          </span>, pursuing a Master’s in Software Engineering, I’m driven by a
          passion for &nbsp;
          <span className="text-white underline">learning and innovation</span>.
          <br />
          <br />
          My curiosity and determination led me to the world of&nbsp;
          <span className="text-white underline">full-stack development</span>,
          where I’ve successfully built numerous projects, ranging from
          immersive web applications to complex backend systems. My technical
          toolkit includes&nbsp;
          <span className="text-white">
            React, Tailwind CSS, Next.js, Firebase, MongoDB, Node.js, Express.js, and Java
          </span>, empowering me to create seamless, scalable, and user-friendly
          solutions.
          <br />
          <br />
          <span className="text-white underline">
            With a strong commitment to learning
          </span>, I’ve excelled academically, consistently achieving top
          grades while mastering fields like&nbsp;
          <span className="text-white">artificial intelligence</span> and&nbsp;
          <span className="text-white">web development</span>. My ability to
          quickly adapt to new technologies and problem domains has been a key
          driver in my success, both in academic projects and independent
          endeavors.
          <br />
          <br />
          Beyond the technical realm, I value&nbsp;
          <span className="text-white underline">collaboration and empathy</span>, 
          striving to create solutions that not only solve problems but also 
          enhance the lives of users. I believe technology should be as friendly
          and approachable as it is powerful, and I aim to bridge that gap
          through my work.
          <br />
          <br />
          <span className="text-white italic">
            Inspired by the boundless potential of technology, I strive to push
            the boundaries of creativity and innovation, making every project a
            step toward building a more connected and user-friendly digital
            world.
          </span>
        </p>
      </div>
    </Card>
  );
}

