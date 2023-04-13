const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col mb-12 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32">
        <div className="w-full h-full m-auto">
          <div className="flex items-center gap-3">
            <p className="text-2xl uppercase font-bold font-serif mb-2 tracking-wide">About me</p>
            <div className="w-full h-[1px] bg-white flex-1"></div>
          </div>
          <p className="text-justify leading-relaxed">
            {`Hi, I'm Yudha. I'm a frontend web developer who loves to create beautiful and functional websites. When I'm not coding, I enjoy playing video games and like to explore new technologies also read about programming best practices.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
