# Import the necessary modules
from http.server import BaseHTTPRequestHandler, HTTPServer

# Define the handler for the HTTP requests
class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)  # Set the response status code
        self.send_header('Content-type', 'text/html')  # Set the content type
        self.end_headers()
        
        # Send the response content
        self.wfile.write(b"Hello, this is a simple HTTP server!")

# Define the main function to run the server
def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Server running on port {port}")
    httpd.serve_forever()

# Run the server
if __name__ == '__main__':
    run()