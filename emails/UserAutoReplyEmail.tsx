import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export interface UserAutoReplyEmailProps {
  name: string;
  message: string;
  typeWork: string;
}

// Central place to tweak email colors
const emailColors = {
  brand: "#a855f7",
  accent: "#38bdf8",
  dark: "#020617",
  muted: "#9ca3af",
  light: "#f9fafb",
};

export const UserAutoReplyEmail = ({
  name,
  message,
  typeWork,
}: UserAutoReplyEmailProps) => {
  const safeName = name || "there";
  const safeMessage = message || "-";
  const safeTypeWork = typeWork || "General";

  return (
    <Html>
      <Head />
      <Preview>{`Thanks for reaching out to DevSedaghat`}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: emailColors,
            },
          },
        }}
      >
        <Body className="bg-dark m-0 p-0 font-sans">
          <Container className="max-w-xl mx-auto bg-dark rounded-2xl p-6 border border-slate-800">
            {/* HEADER */}
            <Section>
              <Row>
                <Column className="w-12">
                  <Img
                    src="https://devsedaghat.com/email/devsedaghat-logo.png"
                    alt="DevSedaghat Logo"
                    width={48}
                    height={48}
                    className="rounded-full border border-slate-800"
                  />
                </Column>
                <Column className="pl-3">
                  <Heading
                    as="h2"
                    className="text-light text-base font-bold m-0"
                  >
                    DevSedaghat
                  </Heading>
                  <Text className="text-muted text-xs m-0">
                    Developer · Tech Educator · Future SaaS Founder
                  </Text>
                </Column>
                <Column align="right">
                  <Link href="https://linkedin.com/in/devsedaghat">
                    <Img
                      src="https://react.email/static/icons/linkedin.png"
                      width={24}
                      height={24}
                      alt="LinkedIn"
                      className="inline-block mx-1"
                    />
                  </Link>
                  <Link href="https://github.com/devsedaghat">
                    <Img
                      src="https://react.email/static/icons/github.png"
                      width={24}
                      height={24}
                      alt="GitHub"
                      className="inline-block mx-1 opacity-70"
                    />
                  </Link>
                </Column>
              </Row>
            </Section>

            <Hr className="border-slate-900 my-4" />

            {/* MAIN GREETING */}
            <Section className="mb-4">
              <Row>
                <Column className="w-12">
                  <Img
                    src="https://devsedaghat.com/email/amir-avatar.png"
                    alt="Amir Sedaghat"
                    width={48}
                    height={48}
                    className="rounded-full border border-slate-800"
                  />
                </Column>
                <Column className="pl-3">
                  <Heading
                    as="h1"
                    className="text-light text-xl font-bold m-0 mb-2"
                  >
                    Hey {safeName}, thanks for your message 👋
                  </Heading>
                  <Text className="text-light text-sm leading-6 m-0">
                    I’ve received your message about{" "}
                    <span className="text-indigo-300">{safeTypeWork}</span>. I
                    combine frontend, product thinking, and tech education to
                    help founders, teams, and learners build real products — not
                    just demos. I’ll review your message and, if it’s a good
                    fit, I’ll get back to you within{" "}
                    <strong>24–48 hours</strong>.
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* WHAT HAPPENS NEXT */}
            <Section className="bg-gradient-to-br from-slate-900 to-dark rounded-xl p-4 border border-slate-700 mb-4">
              <Heading
                as="h3"
                className="text-light text-sm font-semibold m-0 mb-2"
              >
                What happens next?
              </Heading>
              <Text className="text-muted text-xs m-0 mb-2">
                Here’s how I handle your message:
              </Text>
              <ul className="list-disc pl-4 m-0 text-light text-xs">
                <li className="mb-1">I read your message in detail.</li>
                <li className="mb-1">
                  I check if it aligns with my current focus: MVPs, SaaS,
                  frontend, and developer education.
                </li>
                <li>
                  I reply with next steps, a few questions, or a respectful
                  decline if it’s not the right fit.
                </li>
              </ul>
            </Section>

            {/* FEATURE / EXPLORE DEVSEDAGHAT */}
            <Section className="mb-4">
              <Heading
                as="h3"
                className="text-light text-sm font-semibold m-0 mb-3"
              >
                While you wait, you can explore more of my work
              </Heading>
              <Row>
                <Column className="pr-2">
                  <Img
                    src="https://devsedaghat.com/email/portfolio-screenshot.png"
                    alt="DevSedaghat Portfolio"
                    className="w-full rounded-lg mb-2"
                  />
                  <Text className="text-light text-xs font-medium m-0 mb-1">
                    Portfolio & Projects
                  </Text>
                  <Text className="text-muted text-xs m-0">
                    See what I’ve built and shipped recently.
                  </Text>
                  <Button
                    href="https://devsedaghat.com"
                    className="bg-brand text-white text-xs px-4 py-2 rounded-md mt-2"
                  >
                    View Portfolio
                  </Button>
                </Column>
                <Column className="pl-2">
                  <Img
                    src="https://devsedaghat.com/email/linkedin-screenshot.png"
                    alt="LinkedIn"
                    className="w-full rounded-lg mb-2"
                  />
                  <Text className="text-light text-xs font-medium m-0 mb-1">
                    LinkedIn & Content
                  </Text>
                  <Text className="text-muted text-xs m-0">
                    Follow along as I share what I’m learning and building.
                  </Text>
                  <Button
                    href="https://linkedin.com/in/devsedaghat"
                    className="bg-accent text-white text-xs px-4 py-2 rounded-md mt-2"
                  >
                    Connect on LinkedIn
                  </Button>
                </Column>
              </Row>
            </Section>

            {/* MESSAGE SUMMARY */}
            <Section className="bg-gradient-to-br from-slate-900 to-dark rounded-xl p-4 border border-slate-700 mb-4">
              <Text className="text-muted text-xs m-0 mb-2">
                A quick summary of what you sent:
              </Text>
              <Text className="text-light text-sm leading-6 m-0 whitespace-pre-wrap">
                {safeMessage}
              </Text>
            </Section>

            {/* FOOTER */}
            <Section className="mt-6 text-center">
              <Text className="text-muted text-xs m-0 mb-3">
                Want to stay in touch while I review your message?
              </Text>
              <Row className="mb-3">
                <Column align="center">
                  <Button
                    href="https://linkedin.com/in/devsedaghat"
                    className="bg-brand text-white text-xs px-5 py-2 rounded-md mr-2"
                  >
                    Follow on LinkedIn
                  </Button>
                  <Button
                    href="https://youtube.com/@devsedaghat"
                    className="bg-accent text-white text-xs px-5 py-2 rounded-md ml-2"
                  >
                    YouTube (coming soon)
                  </Button>
                </Column>
              </Row>

              <Row className="mb-4">
                <Column align="center">
                  <Link href="https://github.com/devsedaghat">
                    <Img
                      src="https://react.email/static/icons/github.png"
                      width={20}
                      height={20}
                      alt="GitHub"
                      className="inline-block mx-1 opacity-70"
                    />
                  </Link>
                  <Link href="https://x.com/devsedaghat">
                    <Img
                      src="https://react.email/static/icons/twitter.png"
                      width={20}
                      height={20}
                      alt="X (Twitter)"
                      className="inline-block mx-1 opacity-60"
                    />
                  </Link>
                  <Link href="https://tiktok.com/@devsedaghat">
                    <Img
                      src="https://react.email/static/icons/tiktok.png"
                      width={20}
                      height={20}
                      alt="TikTok"
                      className="inline-block mx-1 opacity-60"
                    />
                  </Link>
                  <Link href="https://instagram.com/devsedaghat">
                    <Img
                      src="https://react.email/static/icons/instagram.png"
                      width={20}
                      height={20}
                      alt="Instagram"
                      className="inline-block mx-1 opacity-60"
                    />
                  </Link>
                </Column>
              </Row>

              <Text className="text-muted text-[11px] m-0 mb-1">
                If this message wasn’t intended for you, you can simply delete
                it — no further action is needed.
              </Text>
              <Text className="text-light text-[11px] m-0">
                – Amir Sedaghat · DevSedaghat
              </Text>

              <Hr className="border-slate-900 my-4" />

              <Text className="text-muted text-[10px] m-0">
                You’re receiving this email because someone used your address in
                my contact form. There’s no newsletter, no automation — just a
                confirmation that your message arrived.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default UserAutoReplyEmail;
