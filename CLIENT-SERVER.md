#Web servers and HTTP (a primer)

Web browsers communicate with web servers using the HyperText Transfer Protocol (HTTP). When you click a link on a web page, submit a form, or run a search, the browser sends an HTTP Request to the server.

**This request includes:**

    A URL identifying the target server and resource (e.g. an HTML file, a particular data point on the server, or a tool to run).
    A method that defines the required action (for example, to get a file or to save or update some data). The different methods/verbs and their associated actions are listed below:

        GET: Get a specific resource (e.g. an HTML file containing information about a product, or a list of products). 
        POST: Create a new resource (e.g. add a new article to a wiki, add a new contact to a database). 
        HEAD: Get the metadata information about a specific resource without getting the body like GET would. You might for example use a HEAD request to find out the last time a resource was updated, and then only use the (more "expensive") GET request to download the resource if it has changed. 
        PUT: Update an existing resource (or create a new one if it doesn't exist).
        DELETE: Delete the specified resource.
        TRACE, OPTIONS, CONNECT, PATCH: These verbs are for less common/advanced tasks, so we won't cover them here.
    Additional information can be encoded with the request (for example, HTML form data). Information can be encoded as:
        URL parameters: GET requests encode data in the URL sent to the server by adding name/value pairs onto the end of it — for example http://mysite.com?name=Fred&age=11. You always have a question mark (?) separating the rest of the URL from the URL parameters, an equals sign (=) separating each name from its associated value, and an ampersand (&) separating each pair. URL parameters are inherently "insecure" as they can be changed by users and then resubmitted. As a result URL parameters/GET requests are not used for requests that update data on the server.
        POST data. POST requests add new resources, the data for which is encoded within the request body.
        Client-side cookies. Cookies contain session data about the client, including keys that the server can use to determine their login status and permissions/accesses to resources.

Web servers wait for client request messages, process them when they arrive, and reply to the web browser with an HTTP Response message. The response contains an HTTP Response status code indicating whether or not the request succeeded (e.g. "200 OK" for success, "404 Not Found" if the resource cannot be found, "403 Forbidden" if the user isn't authorised to see the resource, etc). The body of a successful response to a GET request would contain the requested resource.

When an HTML page is returned it is rendered by the web browser. As part of processing the browser may discover links to other resources (e.g. an HTML page usually references JavaScript and CSS pages), and will send separate HTTP Requests to download these files.

Both static and dynamic websites (discussed in the following sections) use exactly the same communication protocol/patterns.
GET request/response example

You can make a simple GET request by clicking on a link or searching on a site (like a search engine homepage). For example, the HTTP request that is sent when you perform a search on MDN for the term "client server overview" will look a lot like the text shown below (it will not be identical because parts of the message depend on your browser/setup).

The format of HTTP messages is defined in a "web standard" (RFC7230). You don't need to know this level of detail, but at least now you know where this all came from!
The request

Each line of the request contains information about it. The first part is called the header, and contains useful information about the request, in the same way that an HTML head contains useful information about an HTML document (but not the actual content itself,
