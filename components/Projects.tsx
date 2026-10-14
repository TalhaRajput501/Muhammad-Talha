import { FeaturedProjectCard } from './FeaturedProjectCard';
import { Grid } from 'lucide-react';
import Button from './Button';

function Projects() {


  return (
    <section id="projects" className="py-20 px-6 mx-auto border-t border-border/50">
      <div className="text-center max-w-2xl mx-auto mb-9">
        <div className="text-primary text-sm font-bold tracking-wider uppercase mb-2">
          Featured Projects
        </div>
        <h2 className="text-4xl font-extrabold text-foreground leading-tight">
          Stuff I've  <span className="text-transparent bg-clip-text bg-primary">Built So Far</span>
        </h2>
        <p className="text-text-secondary leading-relaxed text-foreground">
          Here's a look at some of my recent work. Every project was a fun challenge and a massive learning experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* HandoutAI */}
        <FeaturedProjectCard
          mainTitle="Featured Project"
          title="HandoutAI"
          description="AI-powered platform that turns university handouts into MCQ practice quizzes. Students can study, test, track progress and improve."
          image="/handout.png"
          technology={['Next.js', 'TypeScript', 'MongoDB', 'AI', 'Node.js']}
          // link="https://handoutai.vercel.app/"
          link="https://handoutai.online/"
          gitHubLink="https://github.com/TalhaRajput501"
        />

          {/* Inventory Management System */}
        <FeaturedProjectCard
          title="Inventory Management System"
          description="Complete inventory management solution with POS, stock tracking, reports, and multi-user management. It supports multi-user access with role-based permissions."
          image="./lightInventory.webp"
          technology={['React', 'Node.js', 'Express', 'MongoDB']}
          link="https://inventoryflow.azurewebsites.net/"
          gitHubLink="https://www.github.com/TalhaRajput501/stock-management-system"
        />

        {/* E-Commerce Platform */}
        <FeaturedProjectCard
          title="E-Commerce Platform"
          description="Full-featured e-commerce platform with product management, cart, payments, and order tracking. Designed with administrative order management views."
          image="./ecom.png"
          technology={['Next.js', 'Stripe', 'Tailwind', 'MongoDB', 'Node.js', ]}
          // link="https://complete-me-beta.vercel.app/"
          link="https://ecom.talhadev.tech/"
          gitHubLink="https://github.com/TalhaRajput501/completeMe"
        />

      </div>

      <div className="mt-12 text-center">
        <Button
          link="/all-projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border text-foreground font-medium rounded-lg hover:bg-surface-hover hover:border-border-hover transition-colors"
        >
          View All Projects
          <Grid className="w-4 h-4" />
        </Button>
      </div>
    </section>

  )
}

export default Projects
