import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export const FeaturedProjectCard = ({ title, description, image, link, gitHubLink, technology, mainTitle }: { title: string; description: string; image: string; link: string; gitHubLink: string; technology: string[]; mainTitle?: string }) => {
  return (
    <div className="flex flex-col bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300">
      {/* Featured Tag */}
      {mainTitle && (
        <div className="absolute z-10 m-4">
          <span className="px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full shadow-lg">
            {mainTitle}
          </span>
        </div>
      )}
      
      {/* Image Wrapper */}
      <div className="w-full aspect-video bg-background-secondary border-b border-border overflow-hidden relative group">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-muted">
            Image Placeholder
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technology.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-background-secondary border border-border text-text-secondary rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto flex-col sm:flex-row">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors w-full"
          >
            Live Demo
            <ExternalLink className="w-4 h-4" />
          </Link>
          <Link
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-background-secondary border border-border text-foreground text-sm font-medium rounded-lg hover:bg-surface-hover hover:border-border-hover transition-all w-full"
          >
            GitHub
            <Github className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};