import heroBg from "@/assets/hero-bg.jpg";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <section className="relative h-[22rem] md:h-[26rem] flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-primary-foreground animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-primary-foreground/80 mt-4 text-base md:text-lg animate-fade-in">
            {subtitle}
          </p>
        )}
        <div className="w-16 h-1 rounded-full bg-primary-glow mx-auto mt-6" />
      </div>
    </section>
  );
};

export default PageBanner;
