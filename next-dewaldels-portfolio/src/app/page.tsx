import Progress from "@/components/progress/progress";
import "nes.css/css/nes.min.css";

export default function Home() {
  return (
    <div className="mb-48">
      <header className="flex flex-col items-center justify-center mb-8 pt-8">
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="text-3xl nes-text is-primary">Portfolio</h2>
          <h1 className="text-5xl font-bold">Dewald Els</h1>
        </div>

        <div className="inline-flex flex-col gap-4">
          <button className="nes-btn is-success w-60">Start</button>
          <button className="nes-btn w-60">About</button>
        </div>
      </header>

      <main>
        <section className="nes-container with-title mb-8">
          <h3 className="title">About</h3>
          <p>
            Hello! My name is Dewald Els. I&apos;m a full stack web developer.
          </p>
        </section>

        <section className="nes-container with-title mb-8">
          <h3 className="title">Projects</h3>
          <button className="nes-btn is-success">Projects! Wow</button>
        </section>

        <section className="nes-container with-title mb-8">
          <h3 className="title">Contact me</h3>

          <div className="flex items-start gap-4 mb-4">
            <div>
              <i className="nes-icon gmail is-large"></i>
            </div>
            <div>
              <p>Drop me an e-mail:</p>
              <a
                target="_blank"
                className="nes-text is-primary underline"
                href="mailto:dewaldifels@gmail.com"
              >
                dewaldifels@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <div>
              <i className="nes-icon github is-large"></i>
            </div>

            <div>
              <p>Checkout my GitHub:</p>
              <a
                target="_blank"
                className="nes-text is-primary underline"
                href="https://github.com/dewald-els"
              >
                @dewald-els
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <div>
              <i className="nes-icon linkedin is-large"></i>
            </div>
            <div>
              <p>I&apos;m also on LinkedIn: </p>
              <a
                target="_blank"
                className="nes-text is-primary underline"
                href="https://linkedin.com/dewald-els"
              >
                @dewald-els
              </a>
            </div>
          </div>

          <div className="mb-4">
            <p>Checkout my Itch.io profile</p>
            <a
              target="_blank"
              className="nes-text is-primary underline"
              href="https://itch.io/mr_betamax"
            >
              @mr_betamax
            </a>
          </div>
        </section>
      </main>

      <Progress />
    </div>
  );
}
