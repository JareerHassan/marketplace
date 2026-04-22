'use client';
// Placeholder URL for the visual workflow screenshot on the right
const WORKFLOW_IMAGE_URL = "https://asset.uinjkt.ac.id/uploads/nrVDCWWX/2024/03/ai-pattern.png";

/**
 * Renders the Agent Control Feature Section based on the provided design.
 * Uses a dark, rich purple background and a distinct orange accent color.
 */
const AgentControlSection: React.FC = () => {
  return (
    // Main container with deep purple background, setting padding and text color
    <div className="min-h-screen  font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* -------------------- 1. HEADER SECTION -------------------- */}
        <header className="text-center mb-20 md:mb-32">
          {/* Accent Question */}
          <h2 className="text-lg font-semibold text-primary mb-4">
          Because control matters
          </h2>

          {/* Main Statement */}
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 max-w-5xl mx-auto">
            Why Build AI Agents with Modern Automation?

          </h2>

          {/* Sub-description */}
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
     AI automation should not be unpredictable. Our marketplace promotes tools that combine structured logic with intelligent automation to create stable, production-ready environments. Modern AI systems require guardrails, monitoring capabilities, workflow integration, and human oversight when necessary.
          </p>
        </header>

        {/* -------------------- 2. FEATURE DETAIL SECTION -------------------- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 text-left space-y-6">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Anchor AI in predictable logic
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
 Reliable AI solutions include deterministic automation steps blended with intelligent decision-making, ensuring predictable outcomes even in complex workflows. With fallback logic and structured error handling, digital businesses can implement AI confidently without compromising operational stability.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
When AI supports critical business processes, oversight and structured control become essential. Our ecosystem encourages tools designed for responsible deployment and scalable automation.            </p>
          </div>

          {/* Right Column: Visual Screenshot/Image */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0 relative">
            {/* Container mimicking the dark, slightly glowing box around the image.
              It uses a deep background with rounded corners and a slight shadow effect.
            */}
            <div className="rounded-2xl p-4  shadow-2xl transform transition duration-500 hover:scale-[1.01]">
              <img
                src={WORKFLOW_IMAGE_URL}
                alt="Visual workflow editor showing nodes for OpenAI GPT-4o, Conversation Memory, and routing logic"
                className="w-full h-auto rounded-xl object-cover"
                // Optional: Fallback for when the placeholder image doesn't load
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevents infinite loop
                  target.src = "https://asset.uinjkt.ac.id/uploads/nrVDCWWX/2024/03/ai-pattern.png";
                }}
              />
            </div>
            
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default AgentControlSection;