import { useTranslations } from 'next-intl';
import React from 'react';

interface ProcessStepProps {
  title: string;
  x: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ title, x }) => (
  <g transform={`translate(${x}, 100)`}>
    <circle cx="0" cy="0" r="70" fill="white" stroke="#000" strokeWidth="2" />
    <text
      x="0"
      y="0"
      textAnchor="middle"
      dominantBaseline="middle"
      className="text-sm font-medium"
    >
      {title.split(' ').map((word, index, array) => (
        <tspan
          key={word}
          x="0"
          dy={index ? '1.2em' : `${-(array.length - 1) * 0.6}em`}
        >
          {word}
        </tspan>
      ))}
    </text>
  </g>
);

interface ProcessLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label?: string;
  color?: string;
}

const ProcessLine: React.FC<ProcessLineProps> = ({
  x1,
  y1,
  x2,
  y2,
  label,
  color = '#000',
}) => (
  <>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" />
    {label && (
      <text
        x={(x1 + x2) / 2}
        y={y1 - 10}
        textAnchor="middle"
        dominantBaseline="bottom"
        className="text-xs font-bold"
      >
        {label}
      </text>
    )}
  </>
);

export const ODMProcessComponent: React.FC = () => {
  const t = useTranslations('ODMProcess');

  const steps = [
    { key: 'formulaSuggestion', title: t('formulaSuggestion'), x: 110 },
    { key: 'design', title: t('design'), x: 330 },
    { key: 'packageDevelopment', title: t('packageDevelopment'), x: 550 },
    { key: 'productManufacturing', title: t('productManufacturing'), x: 770 },
  ];

  const processSteps = [
    { key: 'step1', text: t('step1') },
    { key: 'step2', text: t('step2') },
    { key: 'step3', text: t('step3') },
    { key: 'step4', text: t('step4') },
    { key: 'step5', text: t('step5') },
    { key: 'step6', text: t('step6') },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#00B0A5] md:text-4xl">
          {t('title')}
        </h2>
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 900 300" className="mb-8 w-full max-w-5xl">
            {steps.map((step) => (
              <ProcessStep key={step.key} title={step.title} x={step.x} />
            ))}

            <ProcessLine x1={180} y1={100} x2={260} y2={100} />
            <ProcessLine x1={400} y1={100} x2={480} y2={100} />
            <ProcessLine x1={620} y1={100} x2={700} y2={100} />

            {/* OEM Line */}
            <ProcessLine x1={550} y1={190} x2={770} y2={190} label="OEM" />
            <ProcessLine x1={550} y1={170} x2={550} y2={190} />
            <ProcessLine x1={770} y1={170} x2={770} y2={190} />

            {/* ODM Line */}
            <ProcessLine x1={110} y1={220} x2={770} y2={220} label="ODM" />
            <ProcessLine x1={110} y1={170} x2={110} y2={220} />
            <ProcessLine x1={770} y1={170} x2={770} y2={220} />
          </svg>

          <div className="w-full max-w-4xl text-center">
            {processSteps.map((step, index) => (
              <p key={step.key} className="mb-2 text-sm md:text-base">
                <span className="font-semibold">{`${index + 1}. `}</span>
                {step.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ODMProcessComponent;
