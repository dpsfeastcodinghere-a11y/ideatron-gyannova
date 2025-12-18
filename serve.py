#!/usr/bin/env python3
"""
Gyan Nova - Local Development Server
Simple HTTP server for running the Gyan Nova application locally
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 9999

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

    def do_GET(self):
        # Serve index.html for root path
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

def main():
    # Change to the directory where this script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    print("=" * 60)
    print("🎓 Gyan Nova - Adaptive Learning Platform")
    print("=" * 60)
    print(f"\n✅ Server starting on http://localhost:{PORT}")
    print(f"📂 Serving files from: {script_dir}")
    print("\n📖 Available pages:")
    print(f"   • Home: http://localhost:{PORT}/")
    print(f"   • Dashboard: http://localhost:{PORT}/dashboard.html")
    print(f"   • Learning: http://localhost:{PORT}/learning.html")
    print(f"   • Progress: http://localhost:{PORT}/progress.html")
    print("\n💡 Press Ctrl+C to stop the server")
    print("=" * 60)
    
    # Create server
    Handler = MyHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            # Open browser automatically
            webbrowser.open(f'http://localhost:{PORT}')
            
            # Start serving
            print(f"\n🚀 Server is running! Opening browser...")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n👋 Server stopped. Thank you for using Gyan Nova!")
        sys.exit(0)
    except OSError as e:
        if e.errno == 48 or e.errno == 10048:  # Port already in use
            print(f"\n❌ Error: Port {PORT} is already in use.")
            print(f"   Please close the other application or change the PORT in this script.")
        else:
            print(f"\n❌ Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
