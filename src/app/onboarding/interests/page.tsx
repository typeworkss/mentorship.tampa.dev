import type { NextPage } from 'next';

interface OnboardingInterestsPageProps {
  params: Promise<{ onboardingId: string }>;
}

const OnboardingInterestsPage: NextPage<OnboardingInterestsPageProps> = async ({ params }) => {
  const { onboardingId } = await params;

  return (
    <div>
      <h1>What Are Your Interests?</h1>
      <p>Onboarding ID: {onboardingId}</p>
      {/* ... form to input interests ... */}
    </div>
  );
};

export default OnboardingInterestsPage;
