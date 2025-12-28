import { Mail, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="mailto:birukdemissie23@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all group text-muted-foreground hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://t.me/bdlb99"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all group text-muted-foreground hover:text-foreground"
              aria-label="Telegram"
            >
              <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Telegram</span>
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            <span>© {currentYear} Bura_d. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}



