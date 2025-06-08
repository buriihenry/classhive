const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-buriiSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Top Students</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Our 2024-2025 top students have been announced! Congratulations to all
            the winners.
          </p>
        </div>
        <div className="bg-buriiPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Onboarding Checklist</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-05-02
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Please complete your onboarding checklist by the end of this week to
            ensure a smooth start to the semester.
          </p>
        </div>
        <div className="bg-buriiYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Extra-Curricular</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-06-06
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Extra-curricular activities are starting next week! Make sure to sign up
            for your preferred activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;