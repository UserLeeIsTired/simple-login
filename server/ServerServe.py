from http.server import BaseHTTPRequestHandler, HTTPServer

# Define the handler for the HTTP requests
class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)  # Set the response status code
        self.send_header('Content-type', 'text/html')  # Set the content type
        self.end_headers()
        
        # Send the response content
        self.wfile.write(b"Hello, this is a simple HTTP server!")

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        post_data = post_data.decode('utf-8')  # Decode the byte string to utf-8
        
        # Here you can handle the POST request data as needed
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        
        response = f"Received POST data: {post_data}"
        self.wfile.write(response.encode('utf-8'))

# Define the HTTP server class
class SimpleHTTPServer:
    def __init__(self, port=8000):
        self.server_address = ('', port)
        self.httpd = HTTPServer(self.server_address, SimpleHTTPRequestHandler)
        print(f"Server running on port {port}")

    def run(self):
        self.httpd.serve_forever()



