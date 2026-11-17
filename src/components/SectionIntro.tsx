import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  cta?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  href,
  cta = "View more",
}: Props) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="display text-4xl font-semibold tracking-[-0.05em] md:text-5xl">{title}</h2>
        {description ? (
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{description}</p>
        ) : null}
      </div>
      {href ? (
        <Link href={href} className="btn btn-ghost shrink-0">
          {cta}
          <span aria-hidden>→</span>
        </Link>
      ) : null}
    </div>
  );
}
