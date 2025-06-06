
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Categories',
      links: ['Fonts', 'Website Templates', 'Clothing Designs', 'Coding Projects', 'Graphics', 'Icons']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'FAQ', 'License Info', 'Refund Policy', 'Terms of Service']
    },
    {
      title: 'Company',
      links: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Affiliate Program', 'Partner Program']
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'YouTube', href: '#' },
    { name: 'Dribbble', href: '#' }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DS</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">DesignStore</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Your premier destination for premium design resources. Empowering creators with high-quality fonts, templates, designs, and code solutions.
            </p>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Stay Updated</h4>
              <div className="flex gap-2 max-w-sm">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Get the latest designs and exclusive offers delivered to your inbox.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © {currentYear} DesignStore. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                      <span className="text-xs font-medium">
                        {social.name.charAt(0)}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Accessibility</a>
            <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
