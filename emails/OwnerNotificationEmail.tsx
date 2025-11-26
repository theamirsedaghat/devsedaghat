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

export interface OwnerNotificationEmailProps {
  name: string;
  email: string;
  typeWork: string;
  message: string;
  submittedAt: string;
}

const emailColors = {
  brand: "#a855f7",
  accent: "#38bdf8",
  dark: "#020617",
  muted: "#9ca3af",
  light: "#f9fafb",
};

export const OwnerNotificationEmail = ({
  name,
  email,
  typeWork,
  message,
  submittedAt,
}: OwnerNotificationEmailProps) => {
  const safeName = name || "Unknown";
  const safeEmail = email || "Unknown";
  const safeTypeWork = typeWork || "Unspecified";
  const safeMessage = message || "-";

  return (
    <Html>
      <Head />
      <Preview>{`New portfolio message from ${safeName}`}</Preview>
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
                    Portfolio · New Contact
                  </Text>
                </Column>
                <Column align="right">
                  <Text className="text-muted text-[11px] m-0">
                    {submittedAt}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Hr className="border-slate-900 my-4" />

            {/* TITLE + META */}
            <Section className="mb-4">
              <Heading
                as="h1"
                className="text-light text-xl font-bold m-0 mb-1"
              >
                New contact from your portfolio
              </Heading>
              <Text className="text-muted text-xs m-0">
                Source:{" "}
                <Link
                  href="https://devsedaghat.com/contact"
                  className="text-brand underline"
                >
                  devsedaghat.com/contact
                </Link>
              </Text>
            </Section>

            {/* CONTACT INFO */}
            <Section className="mb-4">
              <Row className="border border-slate-700 rounded-xl p-4 bg-gradient-to-br from-slate-900 to-dark">
                <Column>
                  <Text className="text-light text-sm m-0 mb-1">
                    <strong>Name:</strong> {safeName}
                  </Text>
                  <Text className="text-light text-sm m-0 mb-1">
                    <strong>Email:</strong>{" "}
                    <Link
                      href={`mailto:${safeEmail}`}
                      className="text-accent underline"
                    >
                      {safeEmail}
                    </Link>
                  </Text>
                  <Text className="text-light text-sm m-0">
                    <strong>Topic:</strong> {safeTypeWork}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* MESSAGE */}
            <Section className="bg-gradient-to-br from-slate-900 to-dark rounded-xl p-4 border border-slate-700 mb-4">
              <Text className="text-muted text-xs m-0 mb-2">Message:</Text>
              <Text className="text-light text-sm leading-6 m-0 whitespace-pre-wrap">
                {safeMessage}
              </Text>
            </Section>

            {/* ACTIONS */}
            <Section className="text-center mb-4">
              <Button
                href={`mailto:${safeEmail}`}
                className="bg-brand text-white text-sm px-6 py-3 rounded-md mr-2"
              >
                Reply to {safeName}
              </Button>
              <Button
                href="https://devsedaghat.com"
                className="bg-accent text-white text-sm px-6 py-3 rounded-md"
              >
                Open portfolio
              </Button>
            </Section>

            {/* FOOTER */}
            <Section className="mt-6 text-center">
              <Text className="text-muted text-[11px] m-0 mb-2">
                If this looks like spam or a test, you can ignore it. Rate
                limiting and basic abuse protection are active on the form.
              </Text>
              <Hr className="border-slate-900 my-4" />
              <Text className="text-muted text-[10px] m-0">
                You’re seeing this because your contact form successfully
                received a new submission.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default OwnerNotificationEmail;
