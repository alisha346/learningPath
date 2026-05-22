/* ==========================================================================
   APPLICATION LOGIC - TESTARCHITECT PRO
   Comprehensive 90-Day Learning, Coding, Debugging & Test Design Platform
   ========================================================================== */

// --- 1. CURRICULUM DATABASE (90 DAYS DETAILED ROADMAP) ---
const CURRICULUM = {
    tracks: [
        {
            id: 'java',
            title: 'Java & Object Oriented Programming',
            icon: 'local_cafe',
            class: 'java',
            color: '#d0bcff',
            weeks: [
                {
                    weekNum: 1,
                    title: 'Core Java Fundamentals & OOP Deep Dive',
                    days: [
                        { day: 1, title: 'JVM Internals & Memory Management', desc: 'Understanding JVM, JRE, JDK, Stack vs Heap, and Garbage Collection basics.', tasks: ['Read JVM Memory layout (Stack, Heap, Metaspace)', 'Identify memory leaks in automation suites', 'Learn StackOverflow vs OutOfMemoryError scenarios'], type: 'theory', question: { q: "Which JVM memory region is shared among all threads and stores class metadata?", options: ["Heap", "Stack", "Metaspace", "Program Counter Register"], correct: 2, explain: "In Java 8+, Metaspace stores class metadata and is located in the off-heap native memory. Heap is also shared among all threads but stores object instances. Stack is thread-private." } },
                        { day: 2, title: 'Value Passing & Immutability', desc: 'Pass by value vs reference, immutable classes design, equals() vs ==, and String pool.', tasks: ['Analyze why Strings are immutable in Java', 'Design a custom Immutable Employee class', 'Override equals() and hashCode() contracts correctly'], type: 'coding', challengeId: 'immutable_class' },
                        { day: 3, title: 'OOP Design Patterns in Frameworks', desc: 'Inheritance, interfaces, abstract classes, IS-A vs HAS-A, and runtime polymorphism.', tasks: ['Implement a Page Object Model hierarchy using Inheritance', 'Understand covariant return types in Page Factories', 'Compare Abstract Classes vs Interfaces in Java 8+'], type: 'theory', question: { q: "In a Page Object Model framework, what is the main advantage of using Inheritance for BasePage?", options: ["It enables runtime polymorphism for elements.", "It allows sharing common driver actions and wait utilities across page classes.", "It automatically compiles the classes to parallel threads.", "It prevents memory leaks in garbage collection."], correct: 1, explain: "Inheritance in POM allows subclasses (specific page classes) to inherit shared methods (like custom wait methods, click wrappers) from a parent BasePage class, avoiding code repetition." } },
                        { day: 4, title: 'Collection Framework - Lists & Sets', desc: 'ArrayList internals, LinkedList, HashSet bucket structure, and load factors.', tasks: ['Explain ArrayList dynamic resizing mechanism', 'Understand hashing, bucket structure, and collisions in HashSet', 'Write a custom comparator to sort objects in TreeSet'], type: 'theory', question: { q: "What is the time complexity to retrieve an element from a HashSet in the best case, and what is it in the worst case when a hash collision occurs?", options: ["O(1) best, O(n) worst (or O(log n) in Java 8+)", "O(n) best, O(n^2) worst", "O(log n) best, O(n) worst", "O(1) best, O(1) worst"], correct: 0, explain: "In a HashSet (which uses HashMap under the hood), the best-case retrieval time is O(1) when there are no collisions. In the worst case, if multiple keys hash to the same bucket index, it traverses a linked list (O(n)) or a tree (O(log n) in Java 8+)." } },
                        { day: 5, title: 'Collection Framework - HashMap Internals', desc: 'HashMap working, bucket index calculation, treeification, and ConcurrentHashMap.', tasks: ['Trace HashMap put() and get() internal operations', 'Learn difference between Fail-Fast and Fail-Safe Iterators', 'Understand ConcurrentHashMap locking segments'], type: 'coding', challengeId: 'frequency_map' }
                    ]
                },
                {
                    weekNum: 2,
                    title: 'Java 8 Features & Multithreading',
                    days: [
                        { day: 6, title: 'Lambda Expressions & Functional Interfaces', desc: 'Functional interfaces (Predicate, Function, Consumer, Supplier) and method references.', tasks: ['Write custom predicates for API response filtering', 'Understand functional interfaces in java.util.function', 'Convert anonymous inner classes to lambdas in WebDrivers'], type: 'theory', question: { q: "Which functional interface would you use in WebDrivers to configure custom conditions that accept a WebDriver and evaluate to a boolean?", options: ["Function<WebDriver, Boolean>", "Consumer<WebDriver>", "Supplier<Boolean>", "Runnable"], correct: 0, explain: "WebDriver's ExpectedCondition interface extends Function<WebDriver, T>. A custom boolean check would be defined as Function<WebDriver, Boolean>, taking a WebDriver instance and returning a Boolean." } },
                        { day: 7, title: 'Streams API - Intermediate & Terminal Actions', desc: 'Filter, map, flatMap, collect, groupingBy, and partitioningBy.', tasks: ['Filter a list of active users using Streams API', 'Group a list of transactions by status using Collectors.groupingBy', 'Explain difference between map() and flatMap()'], type: 'coding', challengeId: 'stream_salary' },
                        { day: 8, title: 'Optional Class & Date-Time API', desc: 'Null safety using Optional (orElse, map, filter) and new java.time package.', tasks: ['Refactor selenium config readers to return Optional<String>', 'Format dates using LocalDateTime & DateTimeFormatter', 'Resolve NullPointerExceptions in test report utilities'], type: 'theory', question: { q: "Which method in Optional<T> returns a default value only if the value is not present, without executing the fallback logic if it is present?", options: ["orElse()", "orElseGet()", "orElseThrow()", "ifPresent()"], correct: 1, explain: "orElseGet() takes a Supplier functional interface and evaluates it lazily (only when the Optional is empty). orElse() is evaluated eagerly, creating the fallback object even if the value is present." } },
                        { day: 9, title: 'Exception Handling Architecture', desc: 'Checked/unchecked exception hierarchy, try-with-resources, custom exceptions.', tasks: ['Design custom FrameworkException classes', 'Implement safe driver teardown using try-with-resources', 'Explain exception overriding rules in inheritance'], type: 'debugging', debugId: 'testng_threadsafe' },
                        { day: 10, title: 'Multithreading & ThreadLocal WebDrivers', desc: 'Thread lifecycle, synchronization, race conditions, Executors, and ThreadLocal.', tasks: ['Explain ThreadLocal driver usage in parallel test classes', 'Implement ThreadPoolExecutor for concurrent tasks', 'Define race conditions and deadlocks in execution logs'], type: 'theory', question: { q: "Why is a static ThreadLocal variable used to store WebDriver instances in parallel test suites?", options: ["To share the same browser instance across all threads.", "To ensure each thread has its own isolated, thread-local copy of the WebDriver instance.", "To speed up the network speed of browser requests.", "To automatically close the browser on thread completion."], correct: 1, explain: "ThreadLocal assigns a separate instance of a variable for each thread. When using WebDriver in parallel execution, wrapping it in ThreadLocal prevents threads from overriding each other's driver instances." } }
                    ]
                }
            ]
        },
        {
            id: 'typescript',
            title: 'Modern TypeScript Standards',
            icon: 'data_object',
            class: 'ts',
            color: '#4cd7f6',
            weeks: [
                {
                    weekNum: 3,
                    title: 'TypeScript Type System & Functions',
                    days: [
                        { day: 11, title: 'TypeScript Setup & Compiler Config', desc: 'node, npm, tsconfig.json strict modes, and module resolution.', tasks: ['Set up a strict tsconfig.json with strictNullChecks', 'Learn difference between ES Modules and CommonJS', 'Configure compiler options noImplicitAny & noUnusedLocals'], type: 'theory', question: { q: "What compiler option in tsconfig.json ensures that 'null' and 'undefined' are not assignable to other types unless explicitly declared?", options: ["noImplicitAny", "strictNullChecks", "strictBindCallApply", "alwaysStrict"], correct: 1, explain: "strictNullChecks ensures that null and undefined have their own distinct types and cannot be assigned to variables of other types (like string, number) without union types." } },
                        { day: 12, title: 'Functions & Primitive Types', desc: 'Arrow functions, optional/rest parameters, and type inference.', tasks: ['Write arrow functions with return type assertions', 'Define typed asynchronous return promises', 'Learn best practices of TypeScript type inference'], type: 'theory', question: { q: "What is the return type of a function that does not return any value explicitly in JavaScript vs TypeScript?", options: ["null in both", "undefined in JS, void in TS", "void in JS, never in TS", "undefined in JS, any in TS"], correct: 1, explain: "In JavaScript, a function returning nothing returns undefined at runtime. In TypeScript, its return type is typed as void for compile-time safety." } },
                        { day: 13, title: 'Interfaces vs Type Aliases', desc: 'Object contracts, unions, mapped types, and extensible APIs.', tasks: ['Design type aliases for API JSON request contracts', 'Extend interfaces to support environment parameters', 'Contrast type aliases and interfaces for union types'], type: 'theory', question: { q: "Which of the following is true regarding interfaces vs type aliases in TypeScript?", options: ["Type aliases can use union and intersection types, whereas interfaces cannot.", "Interfaces are faster in compilation than type aliases.", "Type aliases can be merged via declaration merging, but interfaces cannot.", "Interfaces cannot be implemented by classes."], correct: 0, explain: "Type aliases are capable of defining union types (e.g. type Color = 'red' | 'blue') and intersections, whereas interfaces are strictly for defining object structures and can support declaration merging." } },
                        { day: 14, title: 'Arrays, Tuples & Literal Types', desc: 'Readonly arrays, response tuples, and string literal unions.', tasks: ['Declare a tuple for API response status code and message', 'Define browser string literal union types (chrome/firefox/webkit)', 'Utilize readonly modifiers to prevent mutating configs'], type: 'coding', challengeId: 'array_duplicates' },
                        { day: 15, title: 'Generics & Utility Types', desc: 'Generic functions, constraints, Partial, Required, Omit, Pick, Record.', tasks: ['Create a generic API request client in TS', 'Use Pick and Omit to construct partial payloads', 'Explain the utility Type Awaited<T> in Playwright locator chains'], type: 'theory', question: { q: "Which utility type constructs a type by picking all properties from a type and then removing a set of keys?", options: ["Pick<Type, Keys>", "Omit<Type, Keys>", "Exclude<UnionType, ExcludedMembers>", "Extract<Type, Union>"], correct: 1, explain: "Omit<Type, Keys> constructs a new type by taking all properties from the original Type and removing the specified keys." } }
                    ]
                },
                {
                    weekNum: 4,
                    title: 'Async/Await & Error Handling',
                    days: [
                        { day: 16, title: 'JavaScript Event Loop & Promises', desc: 'Promise states, callback queues, microtasks, and async flow.', tasks: ['Explain how microtasks differ from macrotasks in JS', 'Chain promises securely to setup test database states', 'Handle promise rejection errors gracefully'], type: 'theory', question: { q: "In the JavaScript Event Loop, which queue has higher execution priority: the microtask queue (Promises) or the macrotask queue (setTimeout)?", options: ["Macrotask queue", "Microtask queue", "Both have the same priority", "It depends on CPU speed"], correct: 1, explain: "The microtask queue (which handles promises, mutation observers) is fully exhausted before the event loop moves on to the next macrotask (setTimeout, setInterval, UI events) in the queue." } },
                        { day: 17, title: 'Async/Await & Concurrency Control', desc: 'Handling parallel promises using Promise.all, Promise.race, and Promise.allSettled.', tasks: ['Run concurrent API requests using Promise.all', 'Explain async/await syntax compile targets', 'Solve async race conditions in dynamic element loading'], type: 'coding', challengeId: 'async_chain' },
                        { day: 18, title: 'Type Narrowing & Safe Casts', desc: 'typeof, instanceof, user-defined type guards, and discriminated unions.', tasks: ['Write a type guard function for custom API error responses', 'Narrow down web elements to locator contexts', 'Avoid casting using "any" or "as unknown"'], type: 'theory', question: { q: "Which operator is used at runtime in TypeScript to narrow down an object type based on whether it contains a specific property name?", options: ["instanceof", "typeof", "in", "as"], correct: 2, explain: "The 'in' operator checks if a property exists on an object at runtime, allowing TypeScript to narrow down union types." } },
                        { day: 19, title: 'TS Classes & SOLID Principles', desc: 'Private/public/protected constructor shorthand, read-only attributes, and dependency injection.', tasks: ['Design a Page class with private readonly page attributes', 'Apply Single Responsibility Principle (SRP) to locator setups', 'Implement Dependency Injection for environment setups'], type: 'theory', question: { q: "Which SOLID principle states that classes should be open for extension but closed for modification?", options: ["Single Responsibility Principle", "Open-Closed Principle", "Liskov Substitution Principle", "Interface Segregation Principle"], correct: 1, explain: "The Open-Closed Principle (OCP) states that software entities (classes, modules) should be open for extension (e.g., adding new locator configurations) but closed for modification." } },
                        { day: 20, title: 'TS Errors & Compiler Safety', desc: 'Try-catch blocks, type-safe errors, Zod schema validation.', tasks: ['Implement type-safe catch blocks matching instanceof Error', 'Perform runtime schema verification for API payloads using custom schemas', 'Resolve compiler errors on undefined values'], type: 'debugging', debugId: 'playwright_locator_wait' }
                    ]
                }
            ]
        },
        {
            id: 'selenium',
            title: 'Selenium WebDriver & Frameworks',
            icon: 'auto_mode',
            class: 'selenium',
            color: '#ffb869',
            weeks: [
                {
                    weekNum: 5,
                    title: 'Selenium WebDriver Core Architecture',
                    days: [
                        { day: 21, title: 'Selenium 4 Architecture & W3C', desc: 'WebDriver hierarchy, W3C standard protocol, Chrome DevTools integration.', tasks: ['Learn WebDriver BiDi and CDP communication flows', 'Set up basic cross-browser testing using WebDriver interfaces', 'Explain migration changes from Selenium 3 JSON Wire Protocol'], type: 'theory', question: { q: "Which protocol is the direct communication standard between client libraries and browser drivers in Selenium 4?", options: ["JSON Wire Protocol", "W3C WebDriver Standard Protocol", "Chrome DevTools Protocol", "BiDi Protocol"], correct: 1, explain: "Selenium 4 communicates directly with browser drivers using the W3C WebDriver Standard Protocol, deprecating the old JSON Wire Protocol to resolve translation overhead." } },
                        { day: 22, title: 'Advanced XPath & Locators', desc: 'Relative, absolute, starts-with, contains, axes (sibling, parent), dynamic tables.', tasks: ['Write relative xpath to extract specific cells in dynamic grids', 'Find elements in nested Shadow DOM using script executors', 'Compare css selectors and xpath performance speeds'], type: 'theory', question: { q: "Which XPath axes node selector searches for elements that appear before the current node in the document hierarchy?", options: ["following-sibling::", "preceding::", "ancestor::", "descendant::"], correct: 1, explain: "The preceding:: axis selects all nodes that appear before the current node in the document, excluding ancestors, attribute nodes, and namespace nodes." } },
                        { day: 23, title: 'Implicit vs Explicit vs Fluent Waits', desc: 'ExpectedConditions, polling intervals, custom wait strategies.', tasks: ['Implement a Fluent Wait that ignores StaleElement exceptions', 'Debug page synchronization issues on Ajax load dashboards', 'Contrast implicitlyWait vs Explicit WebDriverWait scopes'], type: 'debugging', debugId: 'selenium_stale_element' },
                        { day: 24, title: 'WebElement Operations & Interceptions', desc: 'Actions class (hover, drag-drop), JavaScriptExecutor scrolling and clicks.', tasks: ['Execute mouse hover triggers for multi-tier menus', 'Solve intercepted click exceptions using JS click utility', 'Scroll lazy-loading pages with scrollIntoView() scripts'], type: 'theory', question: { q: "Which class should you use in Selenium to perform complex user gestures such as double click, context click, or drag-and-drop?", options: ["JavascriptExecutor", "Actions", "WebDriverWait", "Select"], correct: 1, explain: "The Actions class is used in Selenium to model complex user gestures (like mouse movements, drag-and-drop, double-click, context-click) by building and executing pointer actions." } },
                        { day: 25, title: 'Frames, Windows & Alerts Handling', desc: 'Switching contexts, nested frames, multiple tabs/handles.', tasks: ['Manage multi-tab authentications using window handles', 'Switch back to defaultContent from child nested frames', 'Accept dynamic alerts safely using conditional checks'], type: 'theory', question: { q: "How do you switch back to the main document/page after operating inside an iframe in Selenium?", options: ["driver.switchTo().defaultContent()", "driver.switchTo().parentFrame()", "driver.switchTo().window(null)", "driver.navigate().back()"], correct: 0, explain: "switchTo().defaultContent() returns the driver context back to the main, top-level document page, allowing you to locate elements outside the iframe." } }
                    ]
                },
                {
                    weekNum: 6,
                    title: 'Advanced Framework Design',
                    days: [
                        { day: 26, title: 'Page Object Model & PageFactory', desc: 'Lazy initialization, page actions encapsulation, fluent page design.', tasks: ['Design custom page factories with lazy locators', 'Construct fluent page classes returning next page contexts', 'Isolate assertions completely into test files'], type: 'theory', question: { q: "What does the @FindBy annotation in Selenium's PageFactory do under the hood when you access the element for the first time?", options: ["It immediately locates the element when the class is instantiated.", "It lazily locates the element on demand (on first interaction).", "It caches the element forever.", "It throws a StaleElementReferenceException immediately."], correct: 1, explain: "PageFactory initializes elements lazily. The elements are not located when the page object class is instantiated; they are searched for in the DOM only when an operation (like click() or getText()) is called on them." } },
                        { day: 27, title: 'Selenium Grid & Docker Execution', desc: 'Hub and Node configurations, parallel execution in containers.', tasks: ['Spin up selenium grid docker containers locally', 'Configure DesiredCapabilities for remote grid sessions', 'Implement parallel cross-browser runs via Grid'], type: 'theory', question: { q: "What is the role of the Hub in Selenium Grid architecture?", options: ["To launch local browser instances on the client machine.", "To receive test requests, parse capabilities, and route them to the appropriate Node for execution.", "To write test results to database containers.", "To run parallel test threads locally."], correct: 1, explain: "The Hub is the central point in Selenium Grid that receives execution requests from tests, parses the desired capabilities, and routes the commands to nodes running the requested browsers." } },
                        { day: 28, title: 'Apache POI Data Driven Setup', desc: 'Reading/writing spreadsheets dynamically, DataProviders injection.', tasks: ['Parse sheet rows using Apache POI library', 'Inject test arguments dynamically using TestNG DataProviders', 'Design thread-safe excel data caching mechanisms'], type: 'theory', question: { q: "In Apache POI, which interface represents a single row in an Excel spreadsheet?", options: ["Row", "XSSFRow", "HSSFRow", "Sheet"], correct: 0, explain: "The 'Row' interface (implemented by HSSFRow and XSSFRow) is the standard interface in Apache POI used to represent and operate on rows of a spreadsheet." } },
                        { day: 29, title: 'Custom Report Integrations', desc: 'Extent Reports, screenshots on failure listener setups.', tasks: ['Integrate Spark/Extent reporting with suite runs', 'Capture and base64-encode failure screenshots', 'Customize report outputs with custom execution tags'], type: 'theory', question: { q: "Which interface in TestNG can you implement to capture test success or failure and attach screenshots to Extent Reports?", options: ["IReporter", "ITestListener", "IHookable", "IAnnotationTransformer"], correct: 1, explain: "ITestListener provides methods (like onTestFailure, onTestSuccess) that are triggered automatically during test executions, making it ideal for taking failure screenshots and logging results to reporting tools." } },
                        { day: 30, title: 'Selenium Exception Strategies', desc: 'Handling NoSuchElement, StaleElement, Timeout, and ElementNotInteractable.', tasks: ['Explain root causes of StaleElementReferenceException', 'Build auto-retry strategies for brittle locators', 'Review exceptions hierarchy in org.openqa.selenium'], type: 'theory', question: { q: "What Selenium exception is thrown if you try to click an element that exists in the DOM but is hidden behind a modal overlay?", options: ["NoSuchElementException", "StaleElementReferenceException", "ElementClickInterceptedException", "TimeoutException"], correct: 2, explain: "ElementClickInterceptedException is thrown when the target element is obscured by another overlapping element (like a modal, spinner, or floating banner), preventing the click from reaching the target." } }
                    ]
                }
            ]
        },
        {
            id: 'playwright',
            title: 'Playwright & E2E Testing',
            icon: 'play_circle',
            class: 'pw',
            color: '#4cd7f6',
            weeks: [
                {
                    weekNum: 7,
                    title: 'Playwright Core Concepts',
                    days: [
                        { day: 31, title: 'Playwright Architecture & Core Objects', desc: 'Browser, BrowserContext, Page, Locator, parallel worker allocations.', tasks: ['Contrast Playwright multi-context architecture vs Selenium multiple browsers', 'Define page locator scopes and lazy execution features', 'Configure workers allocations in playwright.config.ts'], type: 'theory', question: { q: "How does Playwright execute commands inside browser contexts so fast compared to Selenium?", options: ["By writing direct commands to USB ports.", "By communicating over WebSocket connections via a single DevTools/CDP connection.", "By running direct native compiled C++ shell wrappers.", "By bypassing browser security sandboxes."], correct: 1, explain: "Playwright communicates with browsers over a single, persistent WebSocket connection (using Chrome DevTools Protocol or similar APIs for other engines), avoiding HTTP request-response overhead for every command." } },
                        { day: 32, title: 'Locator Strategies & Auto-Waiting', desc: 'getByRole, getByLabel, getByPlaceholder, getByTestId, actionability.', tasks: ['Locate inputs dynamically using semantic helper locators', 'Compare auto-waiting actionability assertions vs explicit weights', 'Verify items using toHaveText & toBeVisible expectations'], type: 'theory', question: { q: "Which of the following describes Playwright's locator design compared to Selenium's WebElement?", options: ["Playwright locators are direct pointers to the elements in memory.", "Playwright locators are lazy-evaluation definitions that run actionability checks and locate elements automatically every time they are interacted with.", "Playwright locators immediately find elements and cache them.", "Playwright locators require explicit wait statements for every click."], correct: 1, explain: "Playwright locators are dynamic references. They don't point to elements directly; they resolve the locator and perform actionability checks (visible, stable, enabled) each time you perform an action (e.g. click)." } },
                        { day: 33, title: 'Page Object Model & Custom Fixtures', desc: 'Locators encapsulation, custom fixtures design (test.extend).', tasks: ['Encapsulate UI locators inside Page classes with TypeScript types', 'Create custom page fixtures to set up pre-authenticated pages', 'Run tests with isolated state containers'], type: 'theory', question: { q: "In Playwright, what is the main benefit of using custom fixtures (test.extend)?", options: ["To speed up network requests.", "To encapsulate setup, teardown, and context creation logic, providing them as reusable parameters to tests.", "To create mock databases.", "To compile TS to JS."], correct: 1, explain: "Custom fixtures let you share setup and teardown flows (like logging in, seeding databases) as simple arguments to test functions. This isolates environment state and keeps test scripts extremely clean." } },
                        { day: 34, title: 'Authentication & storageState Reuse', desc: 'Global setup, parsing cookies/tokens, reusing auth payloads.', tasks: ['Save session cookies/localStorage to storageState file', 'Skip redundant login steps during parallel suite executions', 'Refresh expired auth tokens in global settings setup'], type: 'theory', question: { q: "What is the advantage of using 'storageState' in Playwright config?", options: ["To store video recordings of runs.", "To save browser cookies and local storage state, letting multiple parallel tests run without logging in repeatedly.", "To cache static assets.", "To format reports."], correct: 1, explain: "storageState captures authentication context (cookies, localStorage) after logging in once, saving it to a file. Subsequent test contexts load this state, starting pre-authenticated and saving time." } },
                        { day: 35, title: 'Network Interception & API Mocking', desc: 'Intercepting API routes, modifying payloads, mock service virtualization.', tasks: ['Intercept specific backend endpoints using page.route()', 'Mock server-side API error status responses', 'Assert network payloads matching expected JSON structures'], type: 'debugging', debugId: 'playwright_route_mock' }
                    ]
                },
                {
                    weekNum: 8,
                    title: 'Advanced Playwright Frameworks',
                    days: [
                        { day: 36, title: 'Context & Windows Handling', desc: 'Multi-tab scenarios, iframe access, upload/download events.', tasks: ['Handle tab redirections using page.context().waitForEvent()', 'Locate components inside sub-iframes using frameLocator()', 'Intercept and store downloads in file structures'], type: 'theory', question: { q: "How do you access and operate on elements inside an iframe in Playwright?", options: ["page.switchTo().frame()", "page.frameLocator(selector)", "page.locator('iframe').content()", "page.mainFrame()"], correct: 1, explain: "Playwright uses frameLocator(selector) to target an iframe context. You can chain standard locators directly from it (e.g. page.frameLocator('iframe-id').getByRole('button'))." } },
                        { day: 37, title: 'Playwright Config & Workers Optimization', desc: 'Retries, headless options, baseUrls, reporters, parallel worker constraints.', tasks: ['Configure trace files capture settings on failure runs', 'Tune parallelism workers to match execution cores', 'Deploy HTML test reporting on continuous integrations'], type: 'theory', question: { q: "In Playwright configuration, what property controls the number of parallel test runs that can execute concurrently?", options: ["retries", "workers", "projects", "timeout"], correct: 1, explain: "The 'workers' property in playwright.config.ts controls the maximum number of concurrent worker processes launched to run tests in parallel." } },
                        { day: 38, title: 'Trace Viewer & Debugging Tools', desc: 'PWDEBUG, VS Code extensions, dynamic tracing, console evaluation.', tasks: ['Trace failures step-by-step using playwight Trace Viewer', 'Run tests using execution debugger terminal commands', 'Inspect run steps in HTML report timelines'], type: 'theory', question: { q: "What file format is generated by Playwright during execution that can be uploaded to trace.playwright.dev for debugging?", options: ["json", "zip", "html", "xml"], correct: 1, explain: "Playwright captures traces as .zip archives. These files contain screencasts, console logs, network activity, and DOM snapshots, which can be visualized in the Trace Viewer." } },
                        { day: 39, title: 'UI + API Hybrid Integrations', desc: 'APIRequestContext integration, API data creation, injection into browser.', tasks: ['Trigger HTTP client requests inside Playwright suites', 'Populate test data via endpoints before visiting UI pages', 'Validate UI modifications update database backend structures'], type: 'theory', question: { q: "In Playwright, which context object should be used to make direct HTTP/API requests within a test class?", options: ["page.request", "browser.request", "requestContext", "apiClient"], correct: 0, explain: "Playwright exposes page.request (or request inside tests/fixtures), which is an APIRequestContext. It can be used to send HTTP requests, sharing cookies with the browser." } },
                        { day: 40, title: 'Enterprise Test Stability & Flaky Mitigation', desc: 'Avoiding sleep, deterministic assertions, resilient wait strategies.', tasks: ['Identify and refactor brittle playwright tests using trace logs', 'Replace page.waitForTimeout with assertion waits', 'Verify tests run stably under heavy concurrent work loads'], type: 'theory', question: { q: "Why is 'page.waitForTimeout(ms)' considered an anti-pattern in E2E automation frameworks?", options: ["It crashes the browser window.", "It leads to static waits, making test runs unnecessarily slow and still prone to timing issues under heavy CI loads.", "It overrides explicit wait configurations.", "It blocks the console reporting output."], correct: 1, explain: "Hardcoded timeout statements (static sleeps) make tests slow and brittle. Instead, use auto-waiting assertions (like expect(locator).toBeVisible()) that wait dynamically until conditions are met." } }
                    ]
                }
            ]
        },
        {
            id: 'testng',
            title: 'TestNG & Test Orchestration',
            icon: 'settings',
            class: 'testng',
            color: '#ffb4ab',
            weeks: [
                {
                    weekNum: 9,
                    title: 'TestNG Annotations & Parameters',
                    days: [
                        { day: 41, title: 'TestNG Annotations & Lifecycle', desc: 'Execution order of @Before/@After annotations, prioritization.', tasks: ['Map out annotation execution hierarchy inside test suites', 'Define test prioritization and dependencies parameters', 'Group tests dynamically using TestNG xml configurations'], type: 'theory', question: { q: "What is the correct execution order of TestNG annotations?", options: ["@BeforeSuite -> @BeforeTest -> @BeforeClass -> @BeforeMethod -> @Test", "@BeforeSuite -> @BeforeClass -> @BeforeTest -> @BeforeMethod -> @Test", "@BeforeMethod -> @BeforeClass -> @BeforeTest -> @BeforeSuite -> @Test", "@BeforeSuite -> @BeforeMethod -> @BeforeClass -> @BeforeTest -> @Test"], correct: 0, explain: "The TestNG annotation execution sequence starts with Suite, followed by Test (defined in XML), Class, Method, and finally the actual @Test execution." } },
                        { day: 42, title: 'Data Driven Testing & DataProviders', desc: 'DataProviders, parallel parameter injections, dynamic setups.', tasks: ['Design custom DataProviders pulling from external files', 'Enable parallel execution modes for DataProvider instances', 'Inject runtime arguments using XML parameters'], type: 'theory', question: { q: "By default, how does TestNG invoke a test method linked to a @DataProvider returning multiple rows?", options: ["Once for all rows combined.", "Once for each row in sequence (or in parallel if configured).", "It throws an injection error.", "Only for the first row."], correct: 1, explain: "@DataProvider feeds data rows to a test. The test method is executed once for each row of the dataset. Setting parallel=true runs these invocations concurrently on separate threads." } },
                        { day: 43, title: 'Custom Listeners Integration', desc: 'ITestListener, ISuiteListener, custom actions logging.', tasks: ['Build custom test listeners logging execution events', 'Attach screenshots to reporting objects on error events', 'Orchestrate remote grid configurations at suite start events'], type: 'theory', question: { q: "Which TestNG listener interface allows you to modify annotations (like setting retry analyzer) programmatically at runtime?", options: ["ITestListener", "IAnnotationTransformer", "ISuiteListener", "IHookable"], correct: 1, explain: "IAnnotationTransformer is used to modify TestNG annotations (such as changing invocation count or adding a retry analyzer) programmatically at runtime during suite setup." } },
                        { day: 44, title: 'Retry Analyzer & Failure Reruns', desc: 'IRetryAnalyzer, AnnotationTransformers, dynamic test retries.', tasks: ['Implement a custom IRetryAnalyzer with max retry limits', 'Register retry analyzers programmatically using transformers', 'Configure Maven commands executing failed run suites'], type: 'theory', question: { q: "What method in IRetryAnalyzer must you implement to control whether a failed test should be re-executed?", options: ["retry(ITestResult result)", "shouldRetry()", "reRun()", "retryCount()"], correct: 0, explain: "The IRetryAnalyzer interface has one method: boolean retry(ITestResult result). It must return true if the test should be retried, and false otherwise." } },
                        { day: 45, title: 'Parallel Execution & Thread Safety', desc: 'Suite parallel directives, ThreadLocal WebDriver encapsulation.', tasks: ['Configure TestNG thread count parameters in XML profiles', 'Prevent thread safety issues in parallel executions', 'Resolve duplicate session errors in browser allocations'], type: 'theory', question: { q: "In TestNG, how do you specify class-level parallel execution in the testng.xml file?", options: ["parallel='classes' thread-count='X'", "parallel='methods' thread-count='X'", "parallel='tests' thread-count='X'", "parallel='suites' thread-count='X'"], correct: 0, explain: "To run test classes in parallel, you set parallel='classes' in the <suite> tag of testng.xml, with the thread-count attribute defining the size of the thread pool." } }
                    ]
                }
            ]
        },
        {
            id: 'api_manual',
            title: 'Manual API Design & Edge Cases',
            icon: 'api',
            class: 'api',
            color: '#ffb869',
            weeks: [
                {
                    weekNum: 10,
                    title: 'API Fundamentals & Test Designing',
                    days: [
                        { day: 46, title: 'HTTP Protocol, Methods & Statuses', desc: 'Client-server flow, HTTP methods, headers, status codes.', tasks: ['Understand difference between PUT and PATCH operations', 'Analyze HTTP status ranges (2xx, 3xx, 4xx, 5xx) meanings', 'Specify standard HTTP request headers Content-Type/Accept'], type: 'theory', question: { q: "Which HTTP status code range represents a client-side validation error (e.g. invalid request body)?", options: ["2xx", "3xx", "4xx", "5xx"], correct: 2, explain: "HTTP status codes in the 4xx range indicate client errors (e.g., 400 Bad Request, 401 Unauthorized, 404 Not Found), whereas 5xx codes indicate server-side failures." } },
                        { day: 47, title: 'API Test Case Design Principles', desc: 'Constructing edge cases, boundary testing, negative validations.', tasks: ['Determine required headers validations in API interfaces', 'Write positive validations verifying generated request bodies', 'Design negative validation checks on missing parameter bodies'], type: 'theory', question: { q: "When writing API test cases, why is it critical to validate the JSON schema of a response?", options: ["To check page response speeds.", "To ensure response parameters match expected types, formats, and mandatory requirements.", "To load data in database.", "To verify OAuth tokens."], correct: 1, explain: "Schema validation ensures that the structure, keys, data types, and required fields of the API response JSON match expectations, preventing runtime crashes in consumers." } },
                        { day: 48, title: 'API Security & Authentication', desc: 'Bearer token verification, OAuth 2.0 flow, JWT structures.', tasks: ['Trace Bearer Token injection workflow in HTTP request headers', 'Outline auth validations using invalid/expired token requests', 'Review OAuth 2.0 grant types workflows'], type: 'theory', question: { q: "What type of security token is composed of Header, Payload, and Signature separated by dots?", options: ["Basic auth token", "JWT (JSON Web Token)", "OAuth 2.0 Authorization code", "SAML token"], correct: 1, explain: "A JSON Web Token (JWT) is composed of three parts: a Header (token type/algorithm), a Payload (claims), and a Signature, encoded in Base64Url and separated by dots." } },
                        { day: 49, title: 'E-Commerce Edge-Case Design', desc: 'Deep dive API design for Order, Cart, Checkout endpoints.', tasks: ['Design test case catalog for POST /orders APIs', 'Define boundary values for item count payloads', 'Include duplicate purchase payload security test cases'], type: 'api_design', apiScenarioId: 'ecommerce_order' },
                        { day: 50, title: 'Financial API Validation Models', desc: 'Test design for payment and fund transfer endpoints.', tasks: ['Map API validation cases for fund transfer API parameters', 'Formulate test scenarios checking decimal precision fields', 'Analyze concurrency transfer validation strategies'], type: 'api_design', apiScenarioId: 'financial_transfer' }
                    ]
                }
            ]
        },
        {
            id: 'rest_assured',
            title: 'API Automation with Rest Assured',
            icon: 'api',
            class: 'api',
            color: '#ffb869',
            weeks: [
                {
                    weekNum: 11,
                    title: 'Rest Assured Basics & Requests',
                    days: [
                        { day: 51, title: 'Rest Assured Setup & BDD Syntax', desc: 'given(), when(), then(), RequestSpecification, ResponseSpecification.', tasks: ['Configure maven dependencies for rest-assured suites', 'Apply given-when-then logging statements to requests', 'Design reusable RequestSpecifications for test layers'], type: 'theory', question: { q: "In Rest Assured BDD syntax, which block is used to set request headers, auth tokens, and request body?", options: ["given()", "when()", "then()", "request()"], correct: 0, explain: "The given() block sets up request prerequisites like headers, request parameters, query parameters, cookies, authentication, and body payload." } },
                        { day: 52, title: 'HTTP Methods Automation', desc: 'GET, POST, PUT, DELETE request scripting, query/path parameters.', tasks: ['Write rest-assured scripts verifying POST creations', 'Inject dynamic query parameters into list resources requests', 'Validate deletion HTTP 204 response outputs'], type: 'theory', question: { q: "In Rest Assured, how do you pass a path parameter to a GET request?", options: ["given().param('id', 1)", "given().pathParam('id', 1).when().get('/users/{id}')", "given().queryParam('id', 1)", "given().body('id: 1')"], correct: 1, explain: "pathParam('key', val) registers the parameter, which is then mapped to the placeholder '{key}' inside the resource URL path in the HTTP method call." } },
                        { day: 53, title: 'Serialization & Deserialization', desc: 'POJO structures, Jackson libraries, converting objects to JSON.', tasks: ['Construct POJO classes matching REST APIs payloads', 'Perform serialization converting Java objects to JSON streams', 'Deserialize response contents back to custom class models'], type: 'theory', question: { q: "What is serialization in the context of REST API automation?", options: ["Parsing database results to Java arrays.", "Converting Java/TypeScript POJO objects to JSON/XML strings.", "Decrypting auth headers.", "Validating response codes."], correct: 1, explain: "Serialization is the process of translating a data structure or object state in memory (like a Java POJO class) into a format (like JSON/XML) that can be sent over a network." } },
                        { day: 54, title: 'Response & Schema Validation', desc: 'JsonPath expressions, Hamcrest matchers, JSON schema validator.', tasks: ['Assert nested values in responses using JsonPath queries', 'Validate JSON schemas using Rest Assured matchers', 'Assert response headers and status codes limits'], type: 'theory', question: { q: "Which Rest Assured matcher class/method is used to validate response structures against a pre-defined JSON schema file?", options: ["matchesJsonSchemaInClasspath", "matchesSchema", "assertJsonSchema", "jsonSchemaMatcher"], correct: 0, explain: "matchesJsonSchemaInClasspath (imported from io.restassured.module.jsv.JsonSchemaValidator) matches the response body structure against a JSON schema file located in classpath resources." } },
                        { day: 55, title: 'Rest Assured Custom Filters', desc: 'Logging filters, custom request/response print filters.', tasks: ['Implement a logging filter capturing request details on failure', 'Attach curl equivalent scripts to suite HTML reports', 'Filter requests to inject dynamic session tokens'], type: 'theory', question: { q: "What Rest Assured mechanism allows you to intercept and log request/response details dynamically before they hit the server?", options: ["Listeners", "Filters (io.restassured.filter.Filter)", "Interceptors", "Handlers"], correct: 1, explain: "Rest Assured Filters let you intercept, inspect, and modify requests/responses (e.g. for logging, authentication headers Injection) during execution." } }
                    ]
                },
                {
                    weekNum: 12,
                    title: 'Advanced API Frameworks & UI Hybrid',
                    days: [
                        { day: 56, title: 'API Framework Layers Design', desc: 'Test layer, service layer, payload builders, configuration layers.', tasks: ['Isolate API endpoint paths from test code layers', 'Design payload builders generating randomized requests', 'Load environment properties using custom config readers'], type: 'theory', question: { q: "Why should you isolate API path definitions (endpoints) from the actual test classes in Rest Assured frameworks?", options: ["To improve execution speeds.", "To maintain clean code and prevent hardcoding, enabling easy changes if paths change in swagger specs.", "To avoid compile errors.", "To secure sensitive data."], correct: 1, explain: "Isolating endpoints into constant classes or configuration files prevents code duplication. If an endpoint path changes, you only update it in one place instead of multiple test classes." } },
                        { day: 57, title: 'Database Validations in Test Suites', desc: 'JDBC connections setups, validating database updates.', tasks: ['Connect to PostgreSQL using JDBC connector libraries', 'Validate API updates modify database values as expected', 'Clean up test database states after suite execution'], type: 'theory', question: { q: "Why is it important to validate database state after calling a POST/PUT/DELETE API in automation runs?", options: ["To check server response times.", "To verify the API actually mutated the database state correctly, ensuring system integration integrity.", "To clear server logs.", "To reset database connections."], correct: 1, explain: "APIs might return a success status code but fail to commit changes or corrupt column states. Verifying the database directly using JDBC confirms the accuracy of backend mutations." } },
                        { day: 58, title: 'Rest Assured & Selenium Hybrid Flow', desc: 'Session tokens injection, API auth state sharing, UI bypass.', tasks: ['Fetch session tokens using Rest Assured client logins', 'Inject authentication cookies directly into Selenium cookies state', 'Bypass UI login screens to load dashboards directly'], type: 'theory', question: { q: "What is the primary benefit of a hybrid UI + API automation flow?", options: ["It uses less memory.", "It bypasses UI actions (like logging in or setting up test data) by using API calls, making tests significantly faster.", "It writes reports to S3.", "It avoids using chrome browsers."], correct: 1, explain: "Executing UI setups (like authentication or record creation) via API calls is extremely fast compared to manual browser clicks. The test only uses the browser for the specific UI flow under test." } },
                        { day: 59, title: 'Playwright UI + Rest Assured Integration', desc: 'Shared config systems, token generation, combined reporting.', tasks: ['Orchestrate UI and API runs under single execution projects', 'Pass Rest Assured generated IDs directly to Playwright locator runs', 'Consolidate execution logs inside unified suite reports'], type: 'theory', question: { q: "How can you share auth states between Playwright UI and Rest Assured in a single framework?", options: ["By serializing the session cookie or token fetched from API and injecting it directly into browser context cookies.", "By copying files manually.", "By opening multiple browser contexts.", "By running them on separate servers."], correct: 0, explain: "You can fetch authentication tokens/cookies via Rest Assured and inject them directly into Playwright's browserContext cookies list, bypassing UI login screens." } },
                        { day: 60, title: 'Senior Ownership & Final System Refactoring', desc: 'SOLID principles in frameworks, memory optimization, CI/CD pipelines.', tasks: ['Refactor frameworks checking compliance with SOLID patterns', 'Detect and remove memory leak causes in drivers sessions', 'Establish execution runners inside Jenkins/GitHub pipelines'], type: 'theory', question: { q: "Which SOLID design principle is violated if you write a single BaseTest class that handles driver setups, API mock setups, database connections, and custom reporting?", options: ["Liskov Substitution Principle", "Single Responsibility Principle", "Interface Segregation Principle", "Open-Closed Principle"], correct: 1, explain: "The Single Responsibility Principle (SRP) states that a class should have only one reason to change. A BaseTest handling driver, API, database, and reporting has multiple responsibilities and is highly brittle." } }
                    ]
                }
            ]
        },
        {
            id: 'appium',
            title: 'Appium Mobile Automation',
            icon: 'phone_android',
            class: 'appium',
            color: '#d0bcff',
            weeks: [
                {
                    weekNum: 13,
                    title: 'Appium Mobile Automation Core',
                    days: [
                        { day: 61, title: 'Appium Architecture & W3C Protocol', desc: 'Understanding Appium 2.0 driver decoupling, W3C Mobile JSONWP, and platform-specific drivers (UiAutomator2 vs XCUITest).', tasks: ['Learn Appium 2.0 decoupling architecture', 'Configure Appium server programmatically', 'Contrast UiAutomator2 vs XCUITest driver frameworks'], type: 'theory', question: { q: "Which of the following is true about Appium 2.0 architecture?", options: ["It requires all drivers to be pre-bundled with the server install.", "It decouples the driver installation from the server CLI, allowing independent updates.", "It communicates using the deprecated JSON Wire Protocol.", "It runs execution threads directly inside the native mobile OS shell."], correct: 1, explain: "Appium 2.0 decoupled the server from specific driver implementations (UiAutomator2, XCUITest, etc.). Drivers can now be installed, updated, and maintained independently via the CLI." } },
                        { day: 62, title: 'Appium Inspector & Mobile Locators', desc: 'Locating elements in native apps using accessibility ID, ID, XPath, class name, and platform-specific locator strategies.', tasks: ['Inspect native app elements using Appium Inspector', 'Create accessibility ID selectors for iOS/Android', 'Avoid using expensive XPath queries in mobile trees'], type: 'theory', question: { q: "Why is accessibility ID the highly recommended locator strategy in mobile automation?", options: ["It compiles faster in the IDE.", "It is platform-agnostic, working on both iOS and Android, and is extremely fast to resolve.", "It automatically handles native app context switches.", "It bypasses the need for server capabilities."], correct: 1, explain: "Accessibility ID (content-desc on Android, accessibilityIdentifier on iOS) is platform-agnostic, stable, and highly performant compared to XPath, which requires parsing the entire UI XML tree." } },
                        { day: 63, title: 'Gestures & W3C Pointer Actions API', desc: 'Simulating touch inputs: swipe, scroll, tap, double tap, pinch, and zoom using the W3C Actions API pointer input.', tasks: ['Perform screen swiping using W3C Pointer Input API', 'Implement multi-touch zoom and pinch coordinates', 'Execute long-press actions on mobile lists'], type: 'theory', question: { q: "In Appium 2.0, how should you perform swiping gestures to ensure cross-platform compatibility?", options: ["Use the deprecated TouchAction class.", "Execute coordinates-based javascript clicks.", "Use the W3C Actions API with PointerInput sequences.", "Call driver.swipe() directly without parameters."], correct: 2, explain: "The TouchAction class is deprecated. The standard W3C Actions API using PointerInput sequences is the official, cross-platform compliant method to define mobile touch gestures." } },
                        { day: 64, title: 'Appium Parallel Grid & Port Mapping', desc: 'Configuring parallel executions across multiple emulators/simulators by mapping systemPort, wdaLocalPort, and chromeDriverPort.', tasks: ['Set up thread-safe concurrent Appium drivers', 'Map systemPort and wdaLocalPort in capabilities', 'Run parallel tests across multiple Android emulators'], type: 'theory', question: { q: "When running Android tests in parallel, why must you configure distinct 'systemPort' capabilities for each thread?", options: ["To prevent browser session cookie collisions.", "To isolate the communication port used by Appium to forward commands to UiAutomator2 server on the device.", "To increase network bandwidth.", "To resolve driver installation conflicts."], correct: 1, explain: "The systemPort capability specifies the port used by Appium to communicate with the UiAutomator2 server running on the device. When running in parallel, each device/emulator must have a unique port mapped to avoid collisions." } },
                        { day: 65, title: 'Hybrid App Context Switching', desc: 'Automating hybrid apps containing native wrappers and HTML WebViews by switching driver context.', tasks: ['List available context handles in hybrid apps', 'Switch driver context to WEBVIEW and click elements', 'Resolve Chromedriver version mismatches'], type: 'debugging', debugId: 'appium_context_switch' },
                        { day: 66, title: 'Desired Capabilities & AppiumOptions', desc: 'Configuring platform capabilities, noReset vs fullReset, automationName, and application paths.', tasks: ['Use UiAutomator2Options to specify app attributes', 'Differentiate noReset and fullReset behaviors', 'Load capabilities from config files dynamically'], type: 'theory', question: { q: "What is the difference between noReset and fullReset capabilities in Appium?", options: ["noReset installs the app from scratch; fullReset leaves the app state untouched.", "noReset keeps user data and does not reinstall; fullReset terminates the app, clears data, and reinstalls the app.", "noReset is for Android; fullReset is for iOS."], correct: 1, explain: "noReset=true avoids reinstalling the app and preserves state between sessions. fullReset=true reinstalls the app, clears cache, and resets all app data before starting the test session." } },
                        { day: 67, title: 'Mobile Web Automation', desc: 'Automating mobile Chrome, Safari, and custom tabs on Android and iOS.', tasks: ['Configure browserName to Chrome on Android', 'Run tests on Safari browser in iOS Simulator', 'Solve responsive view breakpoints on mobile viewports'], type: 'theory', question: { q: "How do you automate Chrome browser on an Android device using Appium?", options: ["By switching context to Webview first.", "By launching Chrome app manually using native selectors.", "By setting the capability 'browserName' to 'Chrome' in Appium Options.", "By injecting javascript hooks in the OS kernel."], correct: 2, explain: "Setting the 'browserName' capability to 'Chrome' (or 'Safari' on iOS) instructs Appium to launch the mobile browser directly, enabling standard web automation on mobile devices." } },
                        { day: 68, title: 'Appium Grid & Device Farms Integration', desc: 'Integrating Appium with Selenium Grid 4 hub and executing tests on cloud device farms (BrowserStack, SauceLabs, AWS Device Farm).', tasks: ['Register Appium nodes to local Selenium Grid 4', 'Upload APK/IPA artifacts to cloud device farms', 'Run suite on BrowserStack using remote driver url'], type: 'theory', question: { q: "How does Selenium Grid 4 route mobile requests to Appium nodes?", options: ["By analyzing the platformName capability and forwarding the session requests to matching Appium nodes.", "By compiling Java files to Android APKs directly.", "By running virtual android instances on the grid hub server.", "By converting HTTP calls to USB commands."], correct: 0, explain: "Selenium Grid 4 relies on matching capabilities. When a test requests platformName: Android, the grid hub routes it to registered Appium nodes that advertise Android compatibility." } },
                        { day: 69, title: 'Deep Link Testing & App Bypassing', desc: 'Using deep links to navigate directly to specific screens, bypassing onboarding, login, or complex user flows.', tasks: ['Trigger deep links on Android using adb shell commands', 'Bypass login screen in test suite using driver.get(deeplink)', 'Verify deep link redirection to order details screen'], type: 'theory', question: { q: "What is the main testing benefit of triggering deep links in mobile automation?", options: ["It secures data transmission.", "It allows bypassing long setup flows (like registration/login) to test specific features directly, speeding up execution.", "It converts hybrid apps to native.", "It generates automated screenshots."], correct: 1, explain: "Deep links allow tests to skip repetitive setup screens, redirecting the app directly to target flows. This saves execution time and reduces framework brittleness." } },
                        { day: 70, title: 'React Native & Flutter Test Engines', desc: 'Automating modern framework wrappers (React Native, Flutter) using Appium Flutter Driver and Native Finders.', tasks: ['Configure Flutter Driver connection settings', 'Use Flutter Finder methods to locate widgets', 'Target testID tags inside React Native apps'], type: 'theory', question: { q: "How do you locate components inside React Native apps for cross-platform automation?", options: ["By using React context states.", "By using testID property in code, which maps to accessibilityIdentifier on iOS and content-desc on Android.", "By using class names directly.", "By running selenium xpath on React DOM."], correct: 1, explain: "React Native's testID prop is mapped to accessibilityIdentifier on iOS and contentDescription on Android. This allows cross-platform locator reuse under Appium." } }
                    ]
                }
            ]
        },
        {
            id: 'devops',
            title: 'DevOps & CI/CD Pipelines',
            icon: 'cloud_sync',
            class: 'devops',
            color: '#4cd7f6',
            weeks: [
                {
                    weekNum: 14,
                    title: 'CI/CD Pipelines & Containerization',
                    days: [
                        { day: 71, title: 'CI/CD Core Concepts & Webhooks', desc: 'Understanding continuous integration, delivery pipeline feedback loops, git branching models, and webhook configurations.', tasks: ['Configure git branch protection rules', 'Set up GitHub webhooks to trigger jenkins jobs', 'Differentiate continuous delivery vs deployment'], type: 'theory', question: { q: "What is the primary purpose of a webhook in a CI/CD setup?", options: ["To compile source code.", "To automatically notify the CI server when a Git event (like a push or pull request) occurs, triggering a build.", "To encrypt secrets.", "To run performance testing."], correct: 1, explain: "Webhooks allow Git repositories to notify CI/CD tools (like Jenkins, GitHub Actions) in real time when commits are pushed, automatically triggering test pipeline runs." } },
                        { day: 72, title: 'Jenkins Declarative Pipelines', desc: 'Writing Jenkinsfiles with stages, agents, environment variables, credentials, and post-build report triggers.', tasks: ['Write a declarative Jenkinsfile with multi-stage scripts', 'Publish HTML test reports using post-build plugins', 'Configure secret credentials parameters safely'], type: 'theory', question: { q: "In a declarative Jenkinsfile, what is the role of the 'agent' directive?", options: ["To define the target notification email.", "To specify where the pipeline execution steps should run (e.g., node name, docker container).", "To sign credentials.", "To execute gradle clean build."], correct: 1, explain: "The agent directive tells Jenkins where to allocate executors for the pipeline. It can run on the controller node, any specific agent label, or inside docker containers." } },
                        { day: 73, title: 'GitHub Actions & Parallel Matrix Execution', desc: 'Designing workflow YAMLs, using matrix execution for parallel environments, and managing action inputs/outputs.', tasks: ['Write a GHA workflow triggered on pull requests', 'Configure matrix strategy to run Chrome/Firefox concurrently', 'Archive test artifacts (videos, traces) on failure'], type: 'theory', question: { q: "In GitHub Actions, what is the primary benefit of the 'matrix' strategy?", options: ["It encrypts repository files.", "It runs multiple jobs concurrently across different configurations (like OS, browser, or node versions) using a single job definition.", "It connects GitHub to AWS instances.", "It hosts static html reports."], correct: 1, explain: "The matrix strategy in GitHub Actions creates multiple runs based on variable combinations (e.g. running your playwright tests on chrome, firefox, and webkit in parallel)." } },
                        { day: 74, title: 'Dockerizing Test Frameworks', desc: 'Writing Dockerfiles for test suites, managing layer caching, installing browser binaries, and passing env properties.', tasks: ['Write a multi-stage Dockerfile for Maven/Node frameworks', 'Inject test execution environment variables at container start', 'Optimize Docker layer caching for dependencies'], type: 'theory', question: { q: "In Docker, how can you prevent downloading project packages (npm/maven) on every single code change?", options: ["By using git submodules.", "By copying configuration files (package.json/pom.xml) and running installs BEFORE copying the rest of the application code.", "By setting CMD instructions.", "By running docker-compose up."], correct: 1, explain: "By copying configuration files (package.json/pom.xml) first and running install dependencies, Docker caches that layer. It only re-downloads packages if the config files themselves change." } },
                        { day: 75, title: 'Docker Compose Grid Orchestration', desc: 'Orchestrating Selenium Grid and test suites using Docker Compose, waiting for services health, and managing volumes.', tasks: ['Define selenium-hub and node services in compose files', 'Use depends_on healthcheck to delay test executions', 'Mount local directories inside docker container logs'], type: 'debugging', debugId: 'docker_compose_links' },
                        { day: 76, title: 'CLI Maven Profiles & Arguments', desc: 'Using Maven profiles and Gradle tasks to pass configurations (env, suite, threadcount) from command lines to frameworks.', tasks: ['Configure maven-surefire-plugin with dynamic values', 'Define test execution profiles in pom.xml', 'Run tests using -Denv=QA command line args'], type: 'theory', question: { q: "How do you pass a system property called 'env' to a Maven surefire execution from terminal?", options: ["mvn clean test --env QA", "mvn clean test -Denv=QA", "mvn clean test -Penv=QA", "mvn clean test set env=QA"], correct: 1, explain: "The -D prefix is the standard Java CLI syntax to set System Properties. The surefire plugin forwards these properties to JVM threads executing tests." } },
                        { day: 77, title: 'Reporting Portals & CI Dashboards', desc: 'Integrating report portals (Allure, Extent, ReportPortal.io) into CI pipelines, and tracking execution histories.', tasks: ['Configure allure-maven command line plugins', 'Integrate test report generation into post execution actions', 'Upload reports automatically to static storage hosting'], type: 'theory', question: { q: "Why is it recommended to generate and publish test reports as build artifacts in CI pipelines?", options: ["It increases code compilation speeds.", "It provides a persistent history of execution logs, screenshots, and trends accessible to stakeholders.", "It bypasses local security configurations.", "It resets server CPU cycles."], correct: 1, explain: "Publishing reports as artifacts stores logs and screenshots of failures on the CI controller, allowing teams to analyze regressions over time." } },
                        { day: 78, title: 'Parallel Runner Execution Tuning', desc: 'Configuring test runner threading capabilities, CPU-core allocations, and avoiding resource contention in build agents.', tasks: ['Tune parallel worker counts on CI agents', 'Analyze runner thread dumps on stuck execution blocks', 'Isolate test execution data database states'], type: 'theory', question: { q: "What is a common symptom of over-allocating execution threads on a standard CI agent?", options: ["Memory leak in pom.xml.", "High numbers of brittle, timing-out, and flaky tests due to CPU starvation on browser instances.", "Automatic database restarts.", "Git pull request failures."], correct: 1, explain: "If you run too many parallel browsers on an agent with limited CPU/Memory, the browsers starve for resources. This leads to slow loading, timeouts, and flaky test runs." } },
                        { day: 79, title: 'Slack & Teams Webhook Alerts', desc: 'Writing automated scripts to post-build results status directly to Slack/Teams webhooks on pipeline completions.', tasks: ['Create Slack incoming webhook integration endpoints', 'Format dynamic JSON message payloads with test stats', 'Trigger alert script on maven build failure states'], type: 'coding', challengeId: 'send_slack_webhook' },
                        { day: 80, title: 'Secrets & Credential Management', desc: 'Securing API keys, passwords, and database connection strings using Jenkins credentials, GitHub Secrets, and vaults.', tasks: ['Store token credentials in GitHub Repository Secrets', 'Mask secrets from printing out in Jenkins console logs', 'Access credentials dynamically using shell wrapper envs'], type: 'theory', question: { q: "When working with sensitive API tokens in GitHub Actions, how do you prevent them from exposing in console logs?", options: ["By naming variables lowercase.", "By defining them in GitHub Secrets and accessing them via the secrets context, which automatically masks them.", "By uploading them to git repositories in public folders.", "By compressing them into zip files."], correct: 1, explain: "GitHub Secrets automatically masks any secrets printed to console logs with asterisks. They should never be hardcoded, only referenced dynamically in YAML scripts." } }
                    ]
                }
            ]
        },
        {
            id: 'architecture',
            title: 'Framework Architecture',
            icon: 'layers',
            class: 'architecture',
            color: '#ffb4ab',
            weeks: [
                {
                    weekNum: 15,
                    title: 'Enterprise Framework Design Patterns',
                    days: [
                        { day: 81, title: 'Design Patterns: Factory & Singleton', desc: 'Designing thread-safe driver factories and singleton configuration managers to enforce clean separation of concerns.', tasks: ['Implement a thread-safe Singleton config reader', 'Design a driver provider Factory returning browser instances', 'Decouple test specs from driver instantiation'], type: 'theory', question: { q: "Which design pattern is typically used to create a single configuration manager instance shared across the entire framework execution?", options: ["Builder Pattern", "Factory Pattern", "Singleton Pattern", "Observer Pattern"], correct: 2, explain: "The Singleton pattern ensures that a class has only one instance and provides a global point of access to it, making it ideal for config managers." } },
                        { day: 82, title: 'Page Object Model vs Screenplay', desc: 'Comparing POM Page Object design with Screenplay Pattern (Actors, Abilities, Tasks, Actions) for reusability.', tasks: ['Analyze POM code duplication on complex tables', 'Design reusable screenplay tasks for user flows', 'Contrast class hierarchy models of both patterns'], type: 'theory', question: { q: "What is the core design philosophy of the Screenplay Pattern?", options: ["Enforcing inheritance on page elements.", "Structuring tests around Actors who use Abilities to perform Tasks and Actions, emphasizing Single Responsibility.", "Using PageFactory annotations to cache web page drivers.", "Bypassing the WebDriver class entirely."], correct: 1, explain: "The Screenplay Pattern replaces POM with Actors who have Abilities (e.g. browse web) and perform Tasks (e.g. login) and Actions (e.g. click). This decouples locators, actions, and validations." } },
                        { day: 83, title: 'Custom Action Wrapper Design', desc: 'Writing custom wrappers for standard actions (click, sendKeys, clear) with automatic explicit waiting and logging.', tasks: ['Write robust click actions ignoring stale exceptions', 'Implement dynamic element flashing before screenshot capture', 'Integrate custom reporting hooks directly in wrappers'], type: 'theory', question: { q: "Why is it standard practice to write custom wrappers around raw WebDriver click/sendKeys methods?", options: ["To bypass Java compile checking.", "To centralize explicit wait conditions, logging, exception handling, and visual reporting hooks in a single location.", "To speed up JavaScript execution inside web pages.", "To run tests without importing Selenium namespaces."], correct: 1, explain: "Custom action wrappers ensure that all interactions automatically wait for readiness, log steps, capture failure snapshots, and handle transient errors consistently." } },
                        { day: 84, title: 'ThreadLocal Driver Isolation', desc: 'Preventing race conditions in parallel executions by enclosing WebDriver instances in thread-isolated scopes.', tasks: ['Verify ThreadLocal variable memory leak prevention', 'Implement clean driver.quit() inside ThreadLocal teardowns', 'Trace session collisions in parallel browser runs'], type: 'theory', question: { q: "When using ThreadLocal<WebDriver>, why is it critical to invoke ThreadLocal.remove() inside the test teardown?", options: ["To format execution reports.", "To prevent memory leaks by clearing the thread-bound references after browser termination.", "To restart the JVM container.", "To trigger garbage collection on Heap static objects."], correct: 1, explain: "Because thread pools (like TestNG runner threads) reuse threads, failing to call remove() keeps WebDriver references in thread maps, preventing Garbage Collection and causing memory leaks." } },
                        { day: 85, title: 'Clean Code & Cognitive Complexity', desc: 'Analyzing framework structures for clean coding standards, refactoring code smells, and adhering to complexity limits.', tasks: ['Refactor long nested loop structures to streams/lambdas', 'Audit cognitive complexity ratings in utilities', 'Enforce SOLID patterns in configuration modules'], type: 'theory', question: { q: "What is cognitive complexity in programming?", options: ["The number of bytes the source file occupies on disk.", "A metric indicating how hard the control flow of a method is for a human to understand, based on nesting and decision paths.", "The speed of the JVM executing the class functions.", "The number of lines of comments in the code."], correct: 1, explain: "Cognitive complexity measures how difficult code is to read and understand. High cognitive complexity (deeply nested loops/conditionals) is a major code smell and leads to high maintenance costs." } },
                        { day: 86, title: 'API Gateways & Scenario Security Mocking', desc: 'Designing secure token mocks and edge validations for corporate security API Gateways.', tasks: ['Design API test suite for gateway endpoints', 'Verify rate limiter response handling on automation layers', 'Assert token validations are handled correctly'], type: 'api_design', apiScenarioId: 'auth_gateway' },
                        { day: 87, title: 'Dynamic Test Data Cache Managers', desc: 'Designing configuration engines that read JSON, YAML, and Databases, and store values in active thread caches.', tasks: ['Implement lazy cache loaders for SQL configurations', 'Create helper utilities reading YAML system profiles', 'Contrast dynamic data readers against static properties'], type: 'theory', question: { q: "What is the benefit of implementing a caching layer in your framework's test data reader?", options: ["It encrypts data fields.", "It prevents repeated, slow, and expensive I/O operations (like file reads or DB queries) during massive parallel suite runs.", "It generates reports.", "It resolves linter bugs."], correct: 1, explain: "Reading files or querying databases repeatedly during parallel runs creates performance bottlenecks. A thread-safe cache reads values once and returns them from memory." } },
                        { day: 88, title: 'TestNG ITestListener Reporting Engine', desc: 'Integrating custom listeners to compile screenshots, stack traces, and console logs into unified test reporting models.', tasks: ['Implement ITestListener interface handlers', 'Embed failure screenshots dynamically into Extent/Allure runs', 'Compile execution metrics at suite completion events'], type: 'theory', question: { q: "Which ITestListener method should you override to capture a screenshot immediately when a test fails?", options: ["onStart", "onTestSuccess", "onTestFailure", "onTestSkipped"], correct: 2, explain: "onTestFailure(ITestResult result) is triggered immediately when a test fails. You can extract the WebDriver instance from the test class and capture a screenshot here." } },
                        { day: 89, title: 'Dynamic Waits & Polling Intervals', desc: 'Tuning Explicit wait parameters, managing polling thresholds, and resolving Stale Element exceptions dynamically.', tasks: ['Tune explicit wait timeouts for unstable environments', 'Configure FluentWait polling intervals in wrappers', 'Compare impact of implicit wait conflicts with explicit waits'], type: 'theory', question: { q: "What is a potential side-effect of mixing Implicit Wait and Explicit Wait in the same test framework?", options: ["It speeds up execution times.", "It causes unpredictable, long delay pauses before elements fail to locate, as the driver conflicts on timeout polling.", "It throws compile errors.", "It deletes cookies."], correct: 1, explain: "Mixing implicit and explicit waits is not recommended by Selenium. It causes conflicting timeouts inside browser drivers, leading to unpredictable lag times that can exceed the defined timeout parameters." } },
                        { day: 90, title: 'SOLID Framework Compliance', desc: 'Enforcing Single Responsibility (SRP), Open-Closed (OCP), and Dependency Inversion (DIP) across all framework utilities.', tasks: ['Refactor driver providers using DIP interfaces', 'Enforce interface segregation for configuration setups', 'Verify OCP compliance on locator factories'], type: 'theory', question: { q: "How does Dependency Inversion Principle (DIP) apply to a test automation framework?", options: ["By hardcoding ChromeDriver class instantiations inside Page classes.", "By programming against interfaces (e.g. WebDriver) rather than concrete implementations (e.g. ChromeDriver), allowing browser changes via configurations.", "By keeping all code in one static utility class.", "By using Maven profiles."], correct: 1, explain: "DIP states that high-level modules should not depend on low-level modules, but rather both should depend on abstractions. Using the WebDriver interface instead of ChromeDriver class allows easily switching browsers via configs." } }
                    ]
                }
            ]
        }
    ]
};

// --- 2. QUIZ DATABASE ---
const QUIZZES = {
    java: [
        {
            q: "Which of the following is true about Java Memory Management?",
            options: [
                "Local variables of primitives are stored in the Stack memory, while Objects are allocated in the Heap memory.",
                "All variables are stored in the Metaspace.",
                "Java Heap memory contains stack traces and thread scopes.",
                "Garbage Collector cleans Stack memory automatically when it is full."
            ],
            correct: 0,
            explain: "In Java, primitive local variables and thread execution frames are stored on the Stack. Objects, including arrays and instances of wrapper classes, are always allocated on the Heap. The garbage collector only acts on Heap memory."
        },
        {
            q: "How does HashMap work internally when a collision occurs?",
            options: [
                "It overrides the previous key-value pair directly.",
                "It throws a ConcurrentModificationException.",
                "It stores the entry in a LinkedList/TreeNode structure at the computed bucket index.",
                "It resizes the map dynamically to resolve the collision."
            ],
            correct: 2,
            explain: "When key hashes point to the same bucket index (collision), HashMap stores elements as nodes in a LinkedList linked to that bucket. In Java 8, if list length exceeds a threshold (8) and map capacity >= 64, it treeifies the node list into a balanced red-black tree (TreeNode) to improve search from O(n) to O(log n)."
        },
        {
            q: "What is the difference between fail-fast and fail-safe iterators?",
            options: [
                "Fail-fast iterators throw ConcurrentModificationException if the collection is structurally modified during iteration; fail-safe iterators work on a clone and do not throw this.",
                "Fail-safe iterators are faster than fail-fast iterators.",
                "Fail-fast iterators are used only in concurrent collections.",
                "Fail-safe iterators throw ArithmeticException."
            ],
            correct: 0,
            explain: "Fail-fast iterators (like ArrayList's iterator) throw a ConcurrentModificationException if the underlying collection is modified during iteration. Fail-safe iterators (used in concurrent collections like CopyOnWriteArrayList) traverse a copy/clone of the collection and ignore structural modifications."
        },
        {
            q: "Which functional interface should be used to test a condition and return a boolean?",
            options: [
                "Function<T, R>",
                "Predicate<T>",
                "Consumer<T>",
                "Supplier<T>"
            ],
            correct: 1,
            explain: "Predicate<T> is a functional interface in Java 8 that takes an argument of type T and returns a boolean value via its test(T t) method. Function<T,R> transforms an input T to output R, Consumer<T> accepts input but returns nothing, and Supplier<T> takes no arguments but returns type T."
        },
        {
            q: "How do you run parallel streams safely in Java without starving the main execution thread pool?",
            options: [
                "By invoking System.gc() before creating the parallel stream.",
                "By wrapping the parallel stream execution inside a custom ForkJoinPool.",
                "By using thread synchronization on the stream map operation.",
                "Parallel streams automatically partition CPU cores and never block other pools."
            ],
            correct: 1,
            explain: "By default, parallel streams utilize the shared common ForkJoinPool. If high-computational tasks block this pool, it starves other operations. Wrapping parallel stream calls inside a custom ForkJoinPool task allows controlling thread parallelism count separately."
        }
    ],
    typescript: [
        {
            q: "What is the primary benefit of enabling 'strictNullChecks' in tsconfig.json?",
            options: [
                "It enables automatic garbage collection for null objects.",
                "It prevents assigning 'null' or 'undefined' to variables unless explicitly typed as union types (e.g. string | null).",
                "It compiles TypeScript code to pure ES5 JavaScript modules.",
                "It forces variables to be declared as constant read-only pointers."
            ],
            correct: 1,
            explain: "When 'strictNullChecks' is true, null and undefined have their own distinct types. Assigning them to variables of other types (e.g., number, string) results in a compile-time type error, reducing runtime NullPointer/undefined bugs."
        },
        {
            q: "Which utility type creates a type by selecting a set of properties from an existing Type?",
            options: [
                "Omit<Type, Keys>",
                "Partial<Type>",
                "Pick<Type, Keys>",
                "Record<Keys, Type>"
            ],
            correct: 2,
            explain: "Pick<Type, Keys> constructs a type by choosing specific keys from the original Type. Omit does the opposite (removes specified keys), Partial makes all keys optional, and Record defines maps of keys to types."
        },
        {
            q: "What is type narrowing in TypeScript?",
            options: [
                "Down-compiling code to run on older legacy browsers.",
                "The process of refining a variable from a broader type (e.g. string | number) to a more specific type using runtime guards.",
                "Restricting the length of elements in a tuple.",
                "Casting a variable as 'any' to bypass typing checks."
            ],
            correct: 1,
            explain: "Type narrowing is typescript's mechanism to verify a variable's runtime type within conditional blocks (using typeof, instanceof, 'in' operator, or type guard functions), allowing secure invocation of type-specific methods."
        }
    ],
    selenium: [
        {
            q: "How does Selenium 4 handle communication compared to Selenium 3?",
            options: [
                "Selenium 4 bypasses HTTP protocols completely and communicates via USB connections.",
                "Selenium 4 adopts direct W3C WebDriver standardization and drops JSON Wire Protocol, resolving overhead conversion steps.",
                "Selenium 4 relies entirely on ChromeDriver server binaries and deprecates all client libraries.",
                "Selenium 4 requires active Node.js server relays to convert requests."
            ],
            correct: 1,
            explain: "In Selenium 4, client libraries speak directly to browsers using the W3C WebDriver protocol. Selenium 3 needed to convert commands into JSON Wire Protocol and then map them to W3C targets via intermediate browser driver translations."
        },
        {
            q: "What is the correct way to handle a StaleElementReferenceException?",
            options: [
                "Use Thread.sleep(5000) to let the browser catch up.",
                "Catch the exception and re-find the element using driver.findElement() before re-attempting the action.",
                "Wrap the method in a synchronized block.",
                "Configure implicitlyWait to be 0."
            ],
            correct: 1,
            explain: "StaleElementReferenceException occurs when an element is no longer attached to the page DOM. To fix it, you must locate the element again (re-fetch locator reference) before invoking the operation, often using explicit waits with ExpectedConditions."
        }
    ],
    playwright: [
        {
            q: "How does Playwright's locator auto-waiting mechanism work?",
            options: [
                "It injects static sleep statements of 500ms before every browser command.",
                "It performs actionability checks (visible, attached, stable, enabled, editable) on target elements before executing actions.",
                "It blocks the main JavaScript thread until all fetch calls in the tab finish.",
                "It requires wrapping all interactions in try-catch structures to wait."
            ],
            correct: 1,
            explain: "Before clicking, typing, or interacting, Playwright performs actionability checks on the locator. It automatically waits for the element to be visible, attached, stable (no moving animations), enabled, and editable, which reduces flaky tests."
        },
        {
            q: "What is the primary purpose of 'storageState' in Playwright config?",
            options: [
                "To define where test reports are stored.",
                "To save cookies and localStorage state (such as authenticated sessions) and reuse them across test contexts to avoid logging in repeatedly.",
                "To save screenshots and video recordings of failures.",
                "To keep test databases in memory."
            ],
            correct: 1,
            explain: "By saving cookies and localStorage state (auth state) after a login flow, Playwright can load this file into new browser contexts. This enables tests to start pre-authenticated, eliminating login execution overhead for every individual test case."
        }
    ]
};

// --- 3. CHALLENGES DATA ---
const PROGRAMMING_CHALLENGES = {
    array_duplicates: {
        title: "Find Duplicates in Array",
        lang: "typescript",
        file: "duplicates.ts",
        time: 15,
        desc: `<h3>Problem Statement</h3>
        <p>Given an integer array <code>nums</code>, write a function <code>findDuplicates(nums: number[]): number[]</code> that returns all elements that appear <strong>twice</strong> in the array.</p>
        <p>Your algorithm must run in <strong>O(n)</strong> time complexity and use <strong>O(1)</strong> constant extra space.</p>
        <div class="mt-4">
            <strong>Example 1:</strong>
            <pre>Input: nums = [4,3,2,7,8,2,3,1]\nOutput: [2,3]</pre>
        </div>`,
        template: `function findDuplicates(nums: number[]): number[] {\n    const result: number[] = [];\n    // Write your O(n) time, O(1) space solution here\n    \n    return result;\n}`,
        evaluate: function(code) {
            try {
                // Safely evaluate code in sandbox
                const cleanCode = code.replace(/function\s+findDuplicates/, "const findDuplicates = ");
                const runFunc = new Function(`${cleanCode}; return findDuplicates;`)();
                
                const testCases = [
                    { in: [4,3,2,7,8,2,3,1], out: [2,3] },
                    { in: [1,1,2], out: [1] },
                    { in: [1], out: [] }
                ];
                
                let passed = 0;
                let logs = [];
                
                testCases.forEach((tc, idx) => {
                    const res = runFunc([...tc.in]);
                    const resSorted = Array.isArray(res) ? [...res].sort() : [];
                    const outSorted = [...tc.out].sort();
                    const isMatch = JSON.stringify(resSorted) === JSON.stringify(outSorted);
                    
                    if (isMatch) {
                        passed++;
                        logs.push(`✔ Test Case ${idx + 1} Passed: Input [${tc.in}], Expected [${tc.out}], Got [${res}]`);
                    } else {
                        logs.push(`❌ Test Case ${idx + 1} Failed: Input [${tc.in}], Expected [${tc.out}], Got [${res}]`);
                    }
                });
                
                // Also check code constraints to ensure O(1) space (no Map/Set constructors)
                const usesCollections = /new\s+(Set|Map)/i.test(code);
                if (usesCollections) {
                    logs.push(`⚠️ Optimization Alert: Your solution compiles, but using Set or Map requires O(n) memory, which violates the O(1) auxiliary space constraint. Hint: modify elements in-place using sign negation!`);
                }
                
                return { success: passed === testCases.length, passed, total: testCases.length, logs };
            } catch (err) {
                return { success: false, passed: 0, total: 3, logs: [`Compilation Error: ${err.message}`] };
            }
        }
    },
    stream_salary: {
        title: "Highest Salary Employee with Streams",
        lang: "java",
        file: "SalaryProcessor.java",
        time: 15,
        desc: `<h3>Problem Statement</h3>
        <p>Using Java 8 Streams, filter employees who work in the "QA" department, find the employee with the highest salary, and return their name.</p>
        <p>Implement the body of <code>findHighestPaidQA(List&lt;Employee&gt; employees): Optional&lt;String&gt;</code>.</p>
        <div class="mt-4">
            <strong>Class Structure:</strong>
            <pre>class Employee {\n  String name;\n  String department;\n  double salary;\n}</pre>
        </div>`,
        template: `public Optional<String> findHighestPaidQA(List<Employee> employees) {\n    return employees.stream()\n        // Write your stream pipeline here\n        ;\n}`,
        evaluate: function(code) {
            // Java simulation engine (parsing structure)
            let logs = [];
            let checks = {
                stream: /employees\.stream\(\)/.test(code),
                filter: /\.filter\([a-zA-Z0-9_\s\-&|()]+->[a-zA-Z0-9_\s\.()\-"]+\)/.test(code),
                max: /\.max\(Comparator\.comparingDouble\([a-zA-Z0-9_::\s\.]+\)\)/.test(code) || /\.max\(\([a-b],\s*[a-b]\)\s*->/.test(code),
                map: /\.map\([a-zA-Z0-9_::\s\.]+\)/.test(code)
            };
            
            let passed = 0;
            if (checks.stream) { passed++; logs.push("✔ Stream created from collection."); } else { logs.push("❌ Missing employees.stream() call."); }
            if (checks.filter) { passed++; logs.push("✔ Filter operation applied on department."); } else { logs.push("❌ Missing filter() step (e.g. checking department equals 'QA')."); }
            if (checks.max) { passed++; logs.push("✔ Max comparator applied on salary."); } else { logs.push("❌ Missing max() comparison based on salary values."); }
            if (checks.map) { passed++; logs.push("✔ Mapping step applied to extract employee name."); } else { logs.push("❌ Missing map() to extract the employee's name."); }
            
            return { success: passed === 4, passed, total: 4, logs };
        }
    },
    immutable_class: {
        title: "Design Immutable Class",
        lang: "java",
        file: "ImmutableEmployee.java",
        time: 10,
        desc: `<h3>Problem Statement</h3>
        <p>Define an immutable class <code>ImmutableEmployee</code> containing two properties: <code>id</code> (int) and <code>skills</code> (List&lt;String&gt;).</p>
        <p>Ensure that objects cannot be modified after creation, and mutable elements (like the skills list) are securely shielded from manipulation.</p>`,
        template: `public final class ImmutableEmployee {\n    // Define fields, constructor, and getter methods here\n}`,
        evaluate: function(code) {
            let logs = [];
            let checks = {
                finalClass: /public\s+final\s+class\s+ImmutableEmployee/.test(code),
                privateFields: /private\s+final\s+/.test(code),
                defensiveCopy: /new\s+ArrayList/i.test(code) || /Collections\.unmodifiableList/i.test(code)
            };
            
            let passed = 0;
            if (checks.finalClass) { passed++; logs.push("✔ Class is declared as final (preventing subclassing)."); } else { logs.push("❌ Class must be declared 'final'."); }
            if (checks.privateFields) { passed++; logs.push("✔ Fields are private and final."); } else { logs.push("❌ Fields must be 'private final' variables."); }
            if (checks.defensiveCopy) { passed++; logs.push("✔ Defensive copying / unmodifiable wrapping applied to lists in constructor & getter."); } else { logs.push("❌ Vulnerability: List getter/constructor returns direct references. Perform defensive copies!"); }
            
            return { success: passed === 3, passed, total: 3, logs };
        }
    },
    frequency_map: {
        title: "Frequency Map Calculation",
        lang: "java",
        file: "FrequencyCounter.java",
        time: 10,
        desc: `<h3>Problem Statement</h3>
        <p>Write a method <code>getCharFrequency(String input): Map&lt;Character, Integer&gt;</code> that returns a frequency count map of characters in the input string.</p>`,
        template: `public Map<Character, Integer> getCharFrequency(String input) {\n    Map<Character, Integer> map = new HashMap<>();\n    // Write character frequency loop here\n    \n    return map;\n}`,
        evaluate: function(code) {
            let logs = [];
            let checks = {
                loop: /for\s*\(\s*char/i.test(code) || /for\s*\(\s*int/i.test(code),
                getOrDefault: /getOrDefault/i.test(code) || /containsKey/i.test(code)
            };
            
            let passed = 0;
            if (checks.loop) { passed++; logs.push("✔ Input iteration loop established."); } else { logs.push("❌ Missing character traversal loop."); }
            if (checks.getOrDefault) { passed++; logs.push("✔ HashMap insertion checking duplicate keys."); } else { logs.push("❌ Missing verification check for existing keys (use map.put(c, map.getOrDefault(c, 0) + 1))."); }
            
            return { success: passed === 2, passed, total: 2, logs };
        }
    },
    async_chain: {
        title: "Chain Async API Calls",
        lang: "typescript",
        file: "chain.ts",
        time: 15,
        desc: `<h3>Problem Statement</h3>
        <p>Implement an asynchronous function <code>fetchUserData(userId: number): Promise<string></code> that calls three mock asynchronous API functions in order:
        <br>1. <code>fetchUser(id)</code>: Returns <code>{ name: string, roleId: number }</code>
        <br>2. <code>fetchRole(roleId)</code>: Returns <code>{ roleName: string }</code>
        <br>3. <code>logAccess(name, roleName)</code>: Returns <code>Promise&lt;boolean&gt;</code>
        </p>
        <p>If logAccess completes successfully, return string <code>"Access Approved for [name] ([roleName])"</code>.</p>`,
        template: `async function fetchUserData(userId: number): Promise<string> {\n    // Implement sequential async calls using await\n    \n}`,
        evaluate: function(code) {
            try {
                // Setup mock dependencies in evaluated context
                const mockSetup = `
                    const fetchUser = async (id) => ({ name: "Ali", roleId: 10 });
                    const fetchRole = async (roleId) => ({ roleName: "QA Lead" });
                    const logAccess = async (name, roleName) => true;
                `;
                const runFunc = new Function(`${mockSetup}; ${code}; return fetchUserData;`)();
                
                let logs = [];
                runFunc(5).then(res => {
                    if (res === "Access Approved for Ali (QA Lead)") {
                        window.dispatchEvent(new CustomEvent('challenge-async-passed', { detail: { success: true, logs: ["✔ Sequential async/await chain executed successfully.", `✔ Output matches expected value: "${res}"`] } }));
                    } else {
                        window.dispatchEvent(new CustomEvent('challenge-async-passed', { detail: { success: false, logs: [`❌ Received incorrect result: "${res}"`] } }));
                    }
                }).catch(err => {
                    window.dispatchEvent(new CustomEvent('challenge-async-passed', { detail: { success: false, logs: [`❌ Execution error: ${err.message}`] } }));
                });
                
                return { deferred: true };
            } catch (err) {
                return { success: false, passed: 0, total: 1, logs: [`Compilation Error: ${err.message}`] };
            }
        }
    }
};

// --- 4. DEBUGGING LAB DATA ---
const DEBUG_CHALLENGES = {
    selenium_stale_element: {
        title: "Selenium Stale Element Exception",
        lang: "java",
        desc: `<p>A selenium test script is failing intermittently with a <code>StaleElementReferenceException</code> while checking user details on a dynamic loading grid.</p>
        <p>Find the buggy line and correct it. Hint: Refetch the locator element reference before performing the final action.</p>`,
        code: [
            { lineNum: 1, text: "public void verifyUserRow(WebDriver driver, String name) {", isBuggy: false },
            { lineNum: 2, text: "    WebElement row = driver.findElement(By.xpath(\"//tr[contains(.,'\" + name + \"')]\"));", isBuggy: false },
            { lineNum: 3, text: "    driver.findElement(By.id(\"refresh-btn\")).click();", isBuggy: false },
            { lineNum: 4, text: "    // BUG: row was located before the page refresh. It is now detached from the DOM.", isBuggy: false },
            { lineNum: 5, text: "    String role = row.findElement(By.className(\"user-role\")).getText();", isBuggy: true, fix: "    row = driver.findElement(By.xpath(\"//tr[contains(.,'\" + name + \"')]\"));\n    String role = row.findElement(By.className(\"user-role\")).getText();" },
            { lineNum: 6, text: "    Assert.assertEquals(role, \"Administrator\");", isBuggy: false },
            { lineNum: 7, text: "}", isBuggy: false }
        ]
    },
    playwright_locator_wait: {
        title: "Playwright Missing Await",
        lang: "typescript",
        desc: `<p>A playwright E2E script fails because it proceeds to click a submit button before completing the text entry, leading to validation errors.</p>
        <p>Find the line that executes non-blocking code due to a missing await statement.</p>`,
        code: [
            { lineNum: 1, text: "export async function fillForm(page: Page) {", isBuggy: false },
            { lineNum: 2, text: "    await page.goto('/login');", isBuggy: false },
            { lineNum: 3, text: "    await page.getByLabel('Email').fill('user@domain.com');", isBuggy: false },
            { lineNum: 4, text: "    // BUG: Missing await causes form submission to trigger before password entry finishes", isBuggy: false },
            { lineNum: 5, text: "    page.getByLabel('Password').fill('SecurePass123');", isBuggy: true, fix: "    await page.getByLabel('Password').fill('SecurePass123');" },
            { lineNum: 6, text: "    await page.getByRole('button', { name: 'Login' }).click();", isBuggy: false },
            { lineNum: 7, text: "}", isBuggy: false }
        ]
    },
    testng_threadsafe: {
        title: "Non-ThreadSafe WebDriver Instance",
        lang: "java",
        desc: `<p>This TestNG base test uses a static driver field. When running tests in parallel, threads overwrite each other's drivers, causing null pointers and random browser closes.</p>
        <p>Fix the driver instantiation to utilize ThreadLocal scopes.</p>`,
        code: [
            { lineNum: 1, text: "public class BaseTest {", isBuggy: false },
            { lineNum: 2, text: "    // BUG: Shared static variables are not thread-safe", isBuggy: false },
            { lineNum: 3, text: "    protected static WebDriver driver;", isBuggy: true, fix: "    protected static ThreadLocal<WebDriver> driver = new ThreadLocal<>();" },
            { lineNum: 4, text: "    ", isBuggy: false },
            { lineNum: 5, text: "    @BeforeMethod", isBuggy: false },
            { lineNum: 6, text: "    public void setup() {", isBuggy: false },
            { lineNum: 7, text: "        driver = new ChromeDriver();", isBuggy: true, fix: "        driver.set(new ChromeDriver());" },
            { lineNum: 8, text: "    }", isBuggy: false },
            { lineNum: 9, text: "}" , isBuggy: false }
        ]
    },
    playwright_route_mock: {
        title: "Playwright Interception Regex Mismatch",
        lang: "typescript",
        desc: `<p>This script intercepts user list API endpoints to inject mock payloads. However, it fails to trigger because the intercept route url is not matching dynamic paths.</p>
        <p>Correct the route expression to match dynamic routes containing path identifiers.</p>`,
        code: [
            { lineNum: 1, text: "test('Mock profile endpoint', async ({ page }) => {", isBuggy: false },
            { lineNum: 2, text: "    // BUG: Route only matches literal '/api/v1/user' but the page queries '/api/v1/user/101'", isBuggy: false },
            { lineNum: 3, text: "    await page.route('/api/v1/user', async route => {", isBuggy: true, fix: "    await page.route('**/api/v1/user/*', async route => {" },
            { lineNum: 4, text: "        await route.fulfill({ status: 200, contentType: 'application/json', body: '{\"name\":\"Mock\"}' });", isBuggy: false },
            { lineNum: 5, text: "    });", isBuggy: false },
            { lineNum: 6, text: "    await page.goto('/profile');", isBuggy: false },
            { lineNum: 7, text: "});", isBuggy: false }
        ]
    }
};

// --- 5. API DESIGN SCENARIOS ---
const API_DESIGN_SCENARIOS = {
    ecommerce_order: {
        title: "E-Commerce - Create Order API",
        endpoint: "POST /api/v1/orders",
        spec: `Headers:
  Content-Type: application/json
  Authorization: Bearer <JWT_Token>

Body Parameters:
  {
    "customerId": Integer (Required),
    "productId": Integer (Required),
    "quantity": Integer (Required, range 1-100),
    "paymentMethod": String (Required, enum: ["CARD", "UPI", "WALLET"]),
    "address": String (Required)
  }`,
        expectedCases: [
            { key: "quantity boundary", desc: "Validate limits (quantity = 0, negative values, and values above 100). Response must return 400 Bad Request." },
            { key: "empty", desc: "Omit mandatory attributes (missing customerId, productId, paymentMethod). Validate payload structural checks." },
            { key: "invalid token", desc: "Evaluate security validation using expired, malformed, or missing authentication Bearer tokens." },
            { key: "sql injection", desc: "SQL injection payload injection on string variables like 'address'." },
            { key: "duplicate transaction", desc: "Verify handling of duplicate transaction requests by submitting duplicate body parameters concurrently." }
        ]
    },
    financial_transfer: {
        title: "Financial - Fund Transfer API",
        endpoint: "POST /api/v1/transfer",
        spec: `Headers:
  Content-Type: application/json
  Authorization: Bearer <JWT_Token>
  X-Idempotency-Key: UUID (Required)

Body Parameters:
  {
    "fromAccount": String (Required, length: 10-18 digits),
    "toAccount": String (Required, length: 10-18 digits),
    "amount": Decimal (Required, positive, max 2 decimal places),
    "currency": String (Required, 3 characters, e.g. "INR")
  }`,
        expectedCases: [
            { key: "same sender", desc: "Perform transfer transactions utilizing matching fromAccount and toAccount. Verify system blockages." },
            { key: "insufficient balance", desc: "Verify accounts balance limits (deducting funds exceeding current ledger balances)." },
            { key: "idempotency", desc: "Submit duplicate requests utilizing a single X-Idempotency-Key to prevent double payouts." },
            { key: "invalid amount", desc: "Verify transferring negative values, zero, or amounts violating decimal configurations (e.g. 500.123)." },
            { key: "limit checks", desc: "Execute values exceeding single-transaction caps or daily regulatory thresholds." }
        ]
    }
};

// --- 6. STATE MANAGEMENT ---
class StateManager {
    constructor() {
        this.stateKey = 'testarchitect_pro_state';
        this.loadState();
    }

    loadState() {
        const local = localStorage.getItem(this.stateKey);
        if (local) {
            this.state = JSON.parse(local);
            // Migration guards for new exercise categories and arrays
            if (!this.state.completedExercises) {
                this.state.completedExercises = {};
            }
            if (!this.state.completedExercises.coding) this.state.completedExercises.coding = [];
            if (!this.state.completedExercises.debugging) this.state.completedExercises.debugging = [];
            if (!this.state.completedExercises.theory) this.state.completedExercises.theory = [];
            if (!this.state.completedExercises.apiDesign) this.state.completedExercises.apiDesign = [];
            
            // Migration guards for settings and userName
            if (!this.state.settings) {
                this.state.settings = {
                    reminderTime: "09:00",
                    reminderEnabled: true,
                    userName: "Ahamad"
                };
            }
            if (!this.state.settings.userName) {
                this.state.settings.userName = "Ahamad";
            }
            this.saveState();
        } else {
            this.state = {
                currentDay: 1,
                completedTasks: {}, // day -> [task indices]
                completedDays: [], // list of days finished
                quizScores: {}, // trackId -> score
                completedExercises: {
                    coding: [], // challengeIds
                    debugging: [], // debugIds
                    theory: [], // theory question IDs
                    apiDesign: [] // apiScenarioIds
                },
                settings: {
                    reminderTime: "09:00",
                    reminderEnabled: true,
                    userName: "Ahamad"
                }
            };
            this.saveState();
        }
    }

    saveState() {
        localStorage.setItem(this.stateKey, JSON.stringify(this.state));
    }

    resetState() {
        localStorage.removeItem(this.stateKey);
        this.loadState();
        showToast("Success", "Platform data reset successfully.", "toast-success");
    }

    markTaskToggle(day, index) {
        if (!this.state.completedTasks[day]) {
            this.state.completedTasks[day] = [];
        }
        const taskList = this.state.completedTasks[day];
        const taskIndex = taskList.indexOf(index);
        
        if (taskIndex > -1) {
            taskList.splice(taskIndex, 1);
        } else {
            taskList.push(index);
        }
        
        this.saveState();
        this.evaluateDayCompletion(day);
    }

    evaluateDayCompletion(day) {
        // Find corresponding day in curriculum database
        let dayObj = null;
        for (const track of CURRICULUM.tracks) {
            for (const week of track.weeks) {
                const found = week.days.find(d => d.day === day);
                if (found) { dayObj = found; break; }
            }
            if (dayObj) break;
        }

        if (!dayObj) return;

        const totalTasks = dayObj.tasks.length;
        const finishedTasks = (this.state.completedTasks[day] || []).length;
        
        // Wait, did they also do the day's exercises?
        let exerciseDone = true;
        if (dayObj.type === 'coding' && dayObj.challengeId) {
            exerciseDone = this.state.completedExercises.coding.includes(dayObj.challengeId);
        } else if (dayObj.type === 'debugging' && dayObj.debugId) {
            exerciseDone = this.state.completedExercises.debugging.includes(dayObj.debugId);
        } else if (dayObj.type === 'api_design' && dayObj.apiScenarioId) {
            exerciseDone = this.state.completedExercises.apiDesign.includes(dayObj.apiScenarioId);
        } else if (dayObj.type === 'theory' && dayObj.question) {
            exerciseDone = this.state.completedExercises.theory.includes(day);
        }

        const isFinishedNow = finishedTasks === totalTasks && exerciseDone;
        const wasFinished = this.state.completedDays.includes(day);

        if (isFinishedNow && !wasFinished) {
            this.state.completedDays.push(day);
            showToast("Day Completed", `Congratulations! You finished Day ${day}'s learning track.`, "toast-success");
        } else if (!isFinishedNow && wasFinished) {
            const idx = this.state.completedDays.indexOf(day);
            if (idx > -1) this.state.completedDays.splice(idx, 1);
        }
        
        // Auto-increment current day if completed current
        if (isFinishedNow && day === this.state.currentDay && this.state.currentDay < 90) {
            this.state.currentDay++;
            showToast("Next Step", `Day ${this.state.currentDay} unlocked!`, "toast-success");
        }

        this.saveState();
        updateUIProgress();
    }

    markExerciseDone(type, id, day) {
        if (!this.state.completedExercises[type].includes(id)) {
            this.state.completedExercises[type].push(id);
        }
        this.saveState();
        if (day) {
            this.evaluateDayCompletion(day);
        }
    }
}

const SM = new StateManager();

// --- 7. ROUTING & RENDERING ENGINE ---
let activeView = 'dashboard';
let activeDay = 1;

function initRouting() {
    // Top Nav menu items
    document.querySelectorAll('.nav-menu .nav-link').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = el.getAttribute('data-view');
            
            // For Interview Prep nav item, go to coding default
            if (targetView === 'coding') {
                switchView('coding');
            } else {
                switchView(targetView);
            }
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) navMenu.classList.remove('mobile-open');
        });
    });

    // Workspace tab buttons for Interview Prep sub-views
    document.querySelectorAll('.workspace-tab').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = el.getAttribute('data-view');
            switchView(targetView);
        });
    });

    // Hero Section CTAs
    const ctaLearn = document.getElementById('hero-cta-learn');
    if (ctaLearn) {
        ctaLearn.addEventListener('click', () => {
            switchView('dashboard');
        });
    }

    const ctaPrep = document.getElementById('hero-cta-prep');
    if (ctaPrep) {
        ctaPrep.addEventListener('click', () => {
            switchView('coding');
        });
    }

    const resumeLearning = document.getElementById('hero-resume-learning');
    if (resumeLearning) {
        resumeLearning.addEventListener('click', (e) => {
            e.preventDefault();
            switchView('learning', { day: SM.state.currentDay });
        });
    }

    // Bento grid track selection tags
    document.querySelectorAll('.bento-tag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const trackId = btn.getAttribute('data-track');
            const targetView = btn.getAttribute('data-view');
            if (trackId) {
                switchView('quizzes', { trackId });
            } else if (targetView) {
                switchView(targetView);
            }
        });
    });
}

function switchView(viewName, params = {}) {
    // Map of interview prep sub-views
    const prepViews = ['coding', 'debugging', 'api-design', 'quizzes'];
    const isPrepView = prepViews.includes(viewName);

    // Deactivate current active nav link
    document.querySelectorAll('.nav-menu .nav-link').forEach(el => {
        el.classList.remove('active');
        // If it's a prep view, highlight the "Interview Prep" menu option (data-view="coding")
        if (isPrepView && el.getAttribute('data-view') === 'coding') {
            el.classList.add('active');
        } else if (!isPrepView && el.getAttribute('data-view') === viewName) {
            el.classList.add('active');
        }
    });

    // Toggle prep workspace sub-tabs visibility
    const prepTabs = document.getElementById('prep-workspace-tabs');
    if (prepTabs) {
        if (isPrepView) {
            prepTabs.style.display = 'flex';
            // Highlight the active sub-tab
            document.querySelectorAll('.workspace-tab').forEach(tab => {
                tab.classList.remove('active');
                if (tab.getAttribute('data-view') === viewName) {
                    tab.classList.add('active');
                }
            });
        } else {
            prepTabs.style.display = 'none';
        }
    }

    activeView = viewName;
    
    // Hide all view panels
    document.querySelectorAll('.view-panel').forEach(panel => {
        panel.style.display = 'none';
    });

    // Display targeted panel
    const targetPanel = document.getElementById(`${viewName}-view`);
    if (targetPanel) {
        targetPanel.style.display = 'block';
    }

    // Render corresponding view contents
    if (viewName === 'home') {
        // Nothing special to render for static home
    } else if (viewName === 'about') {
        // Nothing special to render for static about
    } else if (viewName === 'dashboard') {
        renderDashboard();
    } else if (viewName === 'learning') {
        renderLearning(params.day || SM.state.currentDay);
    } else if (viewName === 'coding') {
        renderCoding(params.challengeId || 'array_duplicates');
    } else if (viewName === 'debugging') {
        renderDebugging(params.debugId || 'selenium_stale_element');
    } else if (viewName === 'api-design') {
        renderAPIDesign(params.scenarioId || 'ecommerce_order');
    } else if (viewName === 'quizzes') {
        renderQuizzes(params.trackId || 'java');
    } else if (viewName === 'settings') {
        renderSettings();
    }
}

// --- 8. VIEW RENDERING UTILITIES ---

// 8.1 Dashboard View
function renderDashboard() {
    // Today's Lesson Quick Info
    const currentDay = SM.state.currentDay;
    let todayDayObj = null;
    let trackTitle = '';
    
    for (const track of CURRICULUM.tracks) {
        for (const week of track.weeks) {
            const found = week.days.find(d => d.day === currentDay);
            if (found) {
                todayDayObj = found;
                trackTitle = track.title;
                break;
            }
        }
        if (todayDayObj) break;
    }

    const todayTitleEl = document.getElementById('dash-today-title');
    const todayDescEl = document.getElementById('dash-today-desc');
    const todayActionEl = document.getElementById('dash-today-action');
    
    if (todayDayObj) {
        todayTitleEl.textContent = `Day ${currentDay}: ${todayDayObj.title}`;
        todayDescEl.textContent = todayDayObj.desc;
        todayActionEl.onclick = () => switchView('learning', { day: currentDay });
    } else {
        todayTitleEl.textContent = `90-Day Challenge Completed!`;
        todayDescEl.textContent = `All structured paths completed. Master level upskilling unlocked.`;
        todayActionEl.style.display = 'none';
    }

    // Today's Checklist Grid
    const checklistContainer = document.getElementById('dash-checklist-container');
    checklistContainer.innerHTML = '';
    
    if (todayDayObj) {
        todayDayObj.tasks.forEach((task, idx) => {
            const isChecked = (SM.state.completedTasks[currentDay] || []).includes(idx);
            const item = document.createElement('div');
            item.className = `checklist-item ${isChecked ? 'checked' : ''}`;
            item.innerHTML = `
                <div class="checklist-checkbox">
                    <span class="material-symbols-outlined text-[14px]">check</span>
                </div>
                <div class="checklist-content">
                    <div class="title">${task}</div>
                </div>
            `;
            item.addEventListener('click', () => {
                SM.markTaskToggle(currentDay, idx);
                item.classList.toggle('checked');
            });
            checklistContainer.appendChild(item);
        });
        
        // Add exercise task to checklist
        let exType = '';
        let exId = '';
        let exLabel = '';
        
        if (todayDayObj.type === 'coding') {
            exType = 'coding'; exId = todayDayObj.challengeId; exLabel = `Practice Coding: ${PROGRAMMING_CHALLENGES[exId].title}`;
        } else if (todayDayObj.type === 'debugging') {
            exType = 'debugging'; exId = todayDayObj.debugId; exLabel = `Debug Lab: ${DEBUG_CHALLENGES[exId].title}`;
        } else if (todayDayObj.type === 'api_design') {
            exType = 'apiDesign'; exId = todayDayObj.apiScenarioId; exLabel = `API Edge Cases: ${API_DESIGN_SCENARIOS[exId].title}`;
        } else if (todayDayObj.type === 'theory' && todayDayObj.question) {
            exType = 'theory'; exId = currentDay; exLabel = `Knowledge Check: ${todayDayObj.title}`;
        }
        
        if (exType) {
            const isExChecked = SM.state.completedExercises[exType].includes(exId);
            const exItem = document.createElement('div');
            exItem.className = `checklist-item ${isExChecked ? 'checked' : ''}`;
            exItem.innerHTML = `
                <div class="checklist-checkbox">
                    <span class="material-symbols-outlined text-[14px]">check</span>
                </div>
                <div class="checklist-content">
                    <div class="title font-bold text-secondary">${exLabel}</div>
                    <div class="duration">Interactive Challenge</div>
                </div>
            `;
            exItem.addEventListener('click', () => {
                if (todayDayObj.type === 'coding') switchView('coding', { challengeId: exId });
                else if (todayDayObj.type === 'debugging') switchView('debugging', { debugId: exId });
                else if (todayDayObj.type === 'api_design') switchView('api-design', { scenarioId: exId });
                else if (todayDayObj.type === 'theory') switchView('learning', { day: currentDay });
            });
            checklistContainer.appendChild(exItem);
        }
    }

    // Horizontal Timeline Nodes rendering
    renderTimelineNodes();
}

function renderTimelineNodes() {
    const timelineNodes = document.getElementById('dash-timeline-nodes');
    timelineNodes.innerHTML = '';
    
    const activeDay = SM.state.currentDay;
    const startDay = Math.max(1, activeDay - 2);
    const endDay = Math.min(90, startDay + 4);
    
    // Line filling calculation
    const fillPercent = ((activeDay - startDay) / (endDay - startDay)) * 100;
    document.getElementById('dash-timeline-line-fill').style.width = `${Math.min(100, Math.max(0, fillPercent))}%`;

    for (let d = startDay; d <= endDay; d++) {
        const node = document.createElement('div');
        node.className = `timeline-node ${SM.state.completedDays.includes(d) ? 'completed' : ''} ${d === activeDay ? 'active' : ''}`;
        
        let pulseHtml = '';
        if (d === activeDay) {
            pulseHtml = '<div class="node-pulse"></div>';
        }
        
        node.innerHTML = `
            ${pulseHtml}
            <div class="node-dot"></div>
            <span class="node-label">Day ${d}</span>
        `;
        
        node.addEventListener('click', () => {
            switchView('learning', { day: d });
        });
        
        timelineNodes.appendChild(node);
    }
}

// 8.2 Learning Hub View
function renderLearning(day) {
    activeDay = parseInt(day);
    
    // Find day details in curriculum
    let dayObj = null;
    let trackObj = null;
    let weekObj = null;
    
    for (const track of CURRICULUM.tracks) {
        for (const week of track.weeks) {
            const found = week.days.find(d => d.day === activeDay);
            if (found) {
                dayObj = found;
                trackObj = track;
                weekObj = week;
                break;
            }
        }
        if (dayObj) break;
    }

    const titleEl = document.getElementById('learn-title');
    const metaEl = document.getElementById('learn-meta');
    const descEl = document.getElementById('learn-desc');
    const tasksContainer = document.getElementById('learn-tasks-container');
    const exerciseContainer = document.getElementById('learn-exercise-container');
    
    // Prev / Next actions
    document.getElementById('learn-prev-btn').onclick = () => { if (activeDay > 1) renderLearning(activeDay - 1); };
    document.getElementById('learn-next-btn').onclick = () => { if (activeDay < 90) renderLearning(activeDay + 1); };

    if (!dayObj) {
        // Fallback for days not explicitly defined yet
        titleEl.textContent = `Day ${activeDay}: Self-Study Topic`;
        metaEl.textContent = `Track: High-Level Automation Mastery`;
        descEl.innerHTML = `
            <p>Welcome to Day ${activeDay}. Read up on the key topics designated in the preparation path.</p>
            <h4 class="text-secondary mt-6 font-bold">Suggested learning topics:</h4>
            <ul class="list-disc pl-5 mt-2 space-y-2">
                <li>Optimize execution bottlenecks inside parallel CI/CD configurations.</li>
                <li>Design secure authentication mocks for local endpoint test suites.</li>
                <li>Practice code profiling, identifying memory allocation leaks in Selenium frameworks.</li>
            </ul>
        `;
        tasksContainer.innerHTML = `<div class="text-outline">No specific checklist. Use this time to revise core collections and algorithms.</div>`;
        exerciseContainer.style.display = 'none';
        return;
    }

    exerciseContainer.style.display = 'block';
    titleEl.textContent = `Day ${activeDay}: ${dayObj.title}`;
    metaEl.textContent = `${trackObj.title} • Week ${weekObj.weekNum}: ${weekObj.title}`;
    descEl.innerHTML = `<p class="text-body-lg text-on-surface-variant">${dayObj.desc}</p>`;

    // Render Checklist
    tasksContainer.innerHTML = '';
    dayObj.tasks.forEach((task, idx) => {
        const isChecked = (SM.state.completedTasks[activeDay] || []).includes(idx);
        const item = document.createElement('div');
        item.className = `checklist-item ${isChecked ? 'checked' : ''}`;
        item.innerHTML = `
            <div class="checklist-checkbox">
                <span class="material-symbols-outlined text-[14px]">check</span>
            </div>
            <div class="checklist-content">
                <div class="title">${task}</div>
            </div>
        `;
        item.addEventListener('click', () => {
            SM.markTaskToggle(activeDay, idx);
            item.classList.toggle('checked');
        });
        tasksContainer.appendChild(item);
    });

    // Render Exercise Trigger
    if (dayObj.type === 'coding' && dayObj.challengeId) {
        const chall = PROGRAMMING_CHALLENGES[dayObj.challengeId];
        exerciseContainer.innerHTML = `
            <h3 class="font-headline-md text-headline-md text-on-surface mb-4">Interactive Exercise</h3>
            <div class="glass-panel flex items-center justify-between">
                <div>
                    <h4 class="font-bold text-on-surface mb-1">Coding Practice: ${chall.title}</h4>
                    <p class="text-sm text-outline">Hands-on coding challenge that marks this day complete upon submission.</p>
                </div>
                <button class="btn btn-primary" onclick="switchView('coding', { challengeId: '${dayObj.challengeId}' })">
                    <span class="material-symbols-outlined">terminal</span> Launch Editor
                </button>
            </div>`;
    } else if (dayObj.type === 'debugging' && dayObj.debugId) {
        const debugCh = DEBUG_CHALLENGES[dayObj.debugId];
        exerciseContainer.innerHTML = `
            <h3 class="font-headline-md text-headline-md text-on-surface mb-4">Interactive Exercise</h3>
            <div class="glass-panel flex items-center justify-between">
                <div>
                    <h4 class="font-bold text-on-surface mb-1">Debugging Lab: ${debugCh.title}</h4>
                    <p class="text-sm text-outline">Identify and fix the bug to mark this day as complete.</p>
                </div>
                <button class="btn btn-primary" onclick="switchView('debugging', { debugId: '${dayObj.debugId}' })">
                    <span class="material-symbols-outlined">bug_report</span> Launch Debugger
                </button>
            </div>`;
    } else if (dayObj.type === 'api_design' && dayObj.apiScenarioId) {
        const apiSc = API_DESIGN_SCENARIOS[dayObj.apiScenarioId];
        exerciseContainer.innerHTML = `
            <h3 class="font-headline-md text-headline-md text-on-surface mb-4">Interactive Exercise</h3>
            <div class="glass-panel flex items-center justify-between">
                <div>
                    <h4 class="font-bold text-on-surface mb-1">API Test Case Design: ${apiSc.title}</h4>
                    <p class="text-sm text-outline">Design comprehensive API edge cases to unlock completion.</p>
                </div>
                <button class="btn btn-primary" onclick="switchView('api-design', { scenarioId: '${dayObj.apiScenarioId}' })">
                    <span class="material-symbols-outlined">api</span> Open Spec Designer
                </button>
            </div>`;
    } else if (dayObj.type === 'theory' && dayObj.question) {
        renderTheoryQuiz(dayObj, activeDay, exerciseContainer);
    } else {
        exerciseContainer.innerHTML = `
            <h3 class="font-headline-md text-headline-md text-on-surface mb-4">Checkpoint</h3>
            <div class="glass-panel flex items-center justify-between">
                <div>
                    <h4 class="font-bold text-on-surface mb-1">Track Quiz</h4>
                    <p class="text-sm text-outline">Test your knowledge on this track.</p>
                </div>
                <button class="btn btn-secondary" onclick="switchView('quizzes', { trackId: '${trackObj.id}' })">Take Quiz</button>
            </div>`;
    }
}

// 8.2b Theory Quiz Inline Renderer
function renderTheoryQuiz(dayObj, day, container) {
    const q = dayObj.question;
    const alreadyDone = SM.state.completedExercises.theory.includes(day);

    container.innerHTML = `
        <h3 class="font-headline-md text-headline-md text-on-surface mb-4">
            <span class="material-symbols-outlined align-middle mr-2" style="color:var(--color-secondary)">quiz</span>
            Knowledge Check
        </h3>
        <div class="theory-quiz-card glass-panel" id="theory-quiz-card">
            <div class="quiz-question-text" id="tq-question">${escapeHtml(q.q)}</div>
            <div class="quiz-options-grid" id="tq-options">
                ${q.options.map((opt, i) => `
                    <button class="quiz-option-btn ${alreadyDone && i === q.correct ? 'correct' : ''}" 
                            id="tq-opt-${i}" 
                            data-index="${i}"
                            onclick="handleTheoryAnswer(${i}, ${q.correct}, ${day})"
                            ${alreadyDone ? 'disabled' : ''}>
                        <span class="quiz-opt-letter">${String.fromCharCode(65 + i)}</span>
                        <span class="quiz-opt-text">${escapeHtml(opt)}</span>
                    </button>
                `).join('')}
            </div>
            <div class="quiz-explain-panel" id="tq-explain" style="display:${alreadyDone ? 'block' : 'none'}">
                <span class="material-symbols-outlined" style="color:var(--color-secondary)">lightbulb</span>
                <p>${escapeHtml(q.explain)}</p>
            </div>
            ${alreadyDone ? `<div class="quiz-completed-badge"><span class="material-symbols-outlined">verified</span> Question Answered — Day Marked Complete</div>` : ''}
        </div>
    `;
}

function handleTheoryAnswer(selectedIndex, correctIndex, day) {
    const buttons = document.querySelectorAll('.quiz-option-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        const idx = parseInt(btn.getAttribute('data-index'));
        if (idx === correctIndex) {
            btn.classList.add('correct');
        } else if (idx === selectedIndex && selectedIndex !== correctIndex) {
            btn.classList.add('incorrect');
        }
    });

    // Show explanation
    const explainPanel = document.getElementById('tq-explain');
    if (explainPanel) explainPanel.style.display = 'block';

    const card = document.getElementById('theory-quiz-card');

    if (selectedIndex === correctIndex) {
        showToast('Correct! 🎉', "Well done! That's the right answer.", 'toast-success');
        // Mark day exercise done
        if (!SM.state.completedExercises.theory.includes(day)) {
            SM.markExerciseDone('theory', day, day);
        }
        // Append completion badge
        if (card && !card.querySelector('.quiz-completed-badge')) {
            const badge = document.createElement('div');
            badge.className = 'quiz-completed-badge';
            badge.innerHTML = `<span class="material-symbols-outlined">verified</span> Question Answered — Day Marked Complete`;
            card.appendChild(badge);
        }
    } else {
        showToast('Incorrect', 'Review the explanation below and try again tomorrow.', 'toast-error');
        // Allow retry after a short delay
        setTimeout(() => {
            buttons.forEach(btn => {
                const idx = parseInt(btn.getAttribute('data-index'));
                if (idx !== correctIndex) {
                    btn.disabled = false;
                    btn.classList.remove('incorrect');
                }
            });
        }, 2000);
    }
}

// 8.3 Coding Playground View
let codingTimerInterval = null;
let activeChallengeId = '';

function renderCoding(challengeId) {
    activeChallengeId = challengeId;
    const challenge = PROGRAMMING_CHALLENGES[challengeId];
    if (!challenge) return;

    // Reset UI state
    document.getElementById('code-title').textContent = challenge.title;
    document.getElementById('code-lang-label').textContent = challenge.file;
    document.getElementById('code-desc-container').innerHTML = challenge.desc;
    
    const editorArea = document.getElementById('code-editor-area');
    editorArea.value = challenge.template;
    
    // Clear Console
    const consoleBody = document.getElementById('code-console-body');
    consoleBody.innerHTML = `<div class="text-outline">Compiler ready. Submit code to run tests.</div>`;
    document.getElementById('code-console-summary').style.display = 'none';

    // Start Timer
    startCodingTimer(challenge.time);

    // Setup action buttons
    document.getElementById('code-run-btn').onclick = () => runCodingChallenge(false);
    document.getElementById('code-submit-btn').onclick = () => runCodingChallenge(true);
}

function startCodingTimer(minutes) {
    if (codingTimerInterval) clearInterval(codingTimerInterval);
    
    let timeRemaining = minutes * 60;
    const timerDisplay = document.getElementById('code-timer');
    timerDisplay.classList.remove('timer-warning');
    
    const updateDisplay = () => {
        const m = Math.floor(timeRemaining / 60);
        const s = timeRemaining % 60;
        timerDisplay.innerHTML = `<span class="material-symbols-outlined text-[18px]">timer</span> <span>${m}:${s < 10 ? '0' + s : s}</span>`;
        
        if (timeRemaining < 120) {
            timerDisplay.classList.add('timer-warning');
        }
        
        if (timeRemaining <= 0) {
            clearInterval(codingTimerInterval);
            timerDisplay.innerHTML = `<span class="material-symbols-outlined text-[18px]">timer</span> <span>TIMEOUT</span>`;
            showToast("Timeout", "Practice session time limit expired. Solve quickly to practice optimal pacing!", "toast-error");
        }
        
        timeRemaining--;
    };
    
    updateDisplay();
    codingTimerInterval = setInterval(updateDisplay, 1000);
}

function runCodingChallenge(isSubmit) {
    const editorArea = document.getElementById('code-editor-area');
    const code = editorArea.value;
    const challenge = PROGRAMMING_CHALLENGES[activeChallengeId];
    
    const consoleBody = document.getElementById('code-console-body');
    consoleBody.innerHTML = `<div class="text-secondary">Evaluating solution...</div>`;

    const summaryEl = document.getElementById('code-console-summary');
    summaryEl.style.display = 'none';

    // TS Async challenges use deferred event validations
    if (challenge.lang === 'typescript' && activeChallengeId === 'async_chain') {
        const handler = (e) => {
            window.removeEventListener('challenge-async-passed', handler);
            displayCodingResults(e.detail, isSubmit);
        };
        window.addEventListener('challenge-async-passed', handler);
    }
    
    const res = challenge.evaluate(code);
    if (!res.deferred) {
        displayCodingResults(res, isSubmit);
    }
}

function displayCodingResults(res, isSubmit) {
    const consoleBody = document.getElementById('code-console-body');
    const summaryEl = document.getElementById('code-console-summary');
    
    consoleBody.innerHTML = '';
    res.logs.forEach(log => {
        const l = document.createElement('div');
        l.className = log.startsWith('✔') ? 'text-secondary mb-1' : log.startsWith('❌') ? 'text-error mb-1' : 'text-outline mb-1';
        l.textContent = log;
        consoleBody.appendChild(l);
    });

    summaryEl.style.display = 'flex';
    if (res.success) {
        summaryEl.className = 'console-summary pass';
        summaryEl.innerHTML = `<span class="dot"></span> <span class="text-secondary">${res.passed}/${res.total} Passed</span>`;
        if (isSubmit) {
            SM.markExerciseDone('coding', activeChallengeId, activeDay);
            if (codingTimerInterval) clearInterval(codingTimerInterval);
            showToast("Challenge Passed", "Coding challenge validated successfully!", "toast-success");
        }
    } else {
        summaryEl.className = 'console-summary fail';
        summaryEl.innerHTML = `<span class="dot"></span> <span class="text-error">${res.passed}/${res.total} Passed</span>`;
        if (isSubmit) {
            showToast("Challenge Failed", "One or more assertions failed. Check errors.", "toast-error");
        }
    }
}

// 8.4 Debugging Lab View
let activeDebugId = '';
let activeBuggyLine = -1;

function renderDebugging(debugId) {
    activeDebugId = debugId;
    const challenge = DEBUG_CHALLENGES[debugId];
    if (!challenge) return;

    document.getElementById('debug-title').textContent = challenge.title;
    document.getElementById('debug-desc-container').innerHTML = challenge.desc;
    
    const codeContainer = document.getElementById('debug-code-lines');
    codeContainer.innerHTML = '';
    
    challenge.code.forEach((line) => {
        const l = document.createElement('div');
        l.className = 'debug-clickable-line';
        l.innerHTML = `<span class="line-number inline-block w-8 text-right pr-3 select-none">${line.lineNum}</span> <span class="line-text font-code-md text-code-md whitespace-pre">${escapeHtml(line.text)}</span>`;
        
        l.addEventListener('click', () => {
            // Unhighlight previous
            document.querySelectorAll('.debug-clickable-line').forEach(el => el.classList.remove('buggy-highlighted', 'fixed-highlighted'));
            
            l.classList.add('buggy-highlighted');
            showDebugFixBox(line);
        });
        
        codeContainer.appendChild(l);
    });

    // Reset evaluation box
    document.getElementById('debug-fix-container').style.display = 'none';
}

function showDebugFixBox(line) {
    const fixContainer = document.getElementById('debug-fix-container');
    fixContainer.style.display = 'block';
    
    const fixTextarea = document.getElementById('debug-fix-input');
    fixTextarea.value = line.text;

    const testBtn = document.getElementById('debug-test-btn');
    testBtn.onclick = () => {
        const userFix = fixTextarea.value.trim().replace(/\s+/g, ' ');
        const correctFix = line.fix ? line.fix.trim().replace(/\s+/g, ' ') : '';
        
        if (line.isBuggy && userFix === correctFix) {
            showToast("Bugs Fixed", "Line correctly identified and fixed!", "toast-success");
            
            // Mark line as corrected green in display
            const highlighted = document.querySelector('.debug-clickable-line.buggy-highlighted');
            if (highlighted) {
                highlighted.classList.remove('buggy-highlighted');
                highlighted.classList.add('fixed-highlighted');
                highlighted.querySelector('.line-text').textContent = fixTextarea.value;
            }
            
            SM.markExerciseDone('debugging', activeDebugId, activeDay);
            fixContainer.style.display = 'none';
        } else if (!line.isBuggy) {
            showToast("Analysis Error", "This line does not contain the root cause exception code.", "toast-error");
        } else {
            showToast("Incorrect Fix", "Logical error: Script compile checks failed. Verify wait parameters or ThreadLocal syntax.", "toast-error");
        }
    };
}

// 8.5 API Test Scenario Designer View
let activeScenarioId = '';

function renderAPIDesign(scenarioId) {
    activeScenarioId = scenarioId;
    const scenario = API_DESIGN_SCENARIOS[scenarioId];
    if (!scenario) return;

    document.getElementById('api-title').textContent = scenario.title;
    document.getElementById('api-method-label').className = `api-method ${scenario.endpoint.split(' ')[0].toLowerCase()}`;
    document.getElementById('api-method-label').textContent = scenario.endpoint.split(' ')[0];
    document.getElementById('api-path-label').textContent = scenario.endpoint.split(' ')[1];
    
    document.getElementById('api-spec-content').textContent = scenario.spec;
    document.getElementById('api-cases-input').value = '';
    
    // Clear evaluation results
    document.getElementById('api-eval-results').style.display = 'none';
    
    document.getElementById('api-eval-btn').onclick = () => evaluateAPITestDesign();
}

function evaluateAPITestDesign() {
    const text = document.getElementById('api-cases-input').value;
    const scenario = API_DESIGN_SCENARIOS[activeScenarioId];
    
    if (!text.trim()) {
        showToast("Error", "Enter scenarios to evaluate.", "toast-error");
        return;
    }

    const userScenarios = text.toLowerCase();
    let covered = 0;
    const feedbackList = document.getElementById('api-eval-feedback');
    feedbackList.innerHTML = '';

    scenario.expectedCases.forEach(c => {
        // Simple semantic regex validation
        const terms = c.key.split(' ');
        const matchesAll = terms.every(term => userScenarios.includes(term));
        
        const li = document.createElement('li');
        li.className = 'flex items-center gap-2 mb-2';
        
        if (matchesAll) {
            covered++;
            li.innerHTML = `<span class="material-symbols-outlined text-secondary text-[18px]">check_circle</span> 
                            <div><strong class="text-secondary text-sm capitalize">${c.key}</strong> - Identified!</div>`;
        } else {
            li.innerHTML = `<span class="material-symbols-outlined text-outline text-[18px]">info</span> 
                            <div class="text-outline-variant"><strong class="capitalize text-sm">${c.key}</strong> - Missing. Hint: ${c.desc}</div>`;
        }
        feedbackList.appendChild(li);
    });

    const scorePercent = Math.round((covered / scenario.expectedCases.length) * 100);
    document.getElementById('api-eval-score').textContent = `${scorePercent}%`;
    document.getElementById('api-eval-desc').textContent = `Identified ${covered} of ${scenario.expectedCases.length} core API edge cases.`;

    document.getElementById('api-eval-results').style.display = 'block';

    if (scorePercent >= 60) {
        SM.markExerciseDone('apiDesign', activeScenarioId, activeDay);
        showToast("Test Design Approved", "Sufficient test design depth achieved. Lesson completed!", "toast-success");
    } else {
        showToast("Design Depth Low", "Add more edge cases, security, and negative checks to pass senior criteria.", "toast-error");
    }
}

// 8.6 Topic Quizzes View
let activeQuizTrackId = '';
let currentQuestionIndex = 0;
let quizScore = 0;

function renderQuizzes(trackId) {
    activeQuizTrackId = trackId;
    currentQuestionIndex = 0;
    quizScore = 0;

    const quizList = QUIZZES[trackId];
    if (!quizList) return;

    document.getElementById('quiz-title').textContent = `${trackId.toUpperCase()} Competency Checkpoint`;
    showQuizQuestion();
}

function showQuizQuestion() {
    const quizList = QUIZZES[activeQuizTrackId];
    const q = quizList[currentQuestionIndex];
    
    // Progress
    const total = quizList.length;
    document.getElementById('quiz-num-label').textContent = `Question ${currentQuestionIndex + 1} of ${total}`;
    document.getElementById('quiz-bar-fill').style.width = `${((currentQuestionIndex) / total) * 100}%`;
    
    document.getElementById('quiz-question-text').textContent = q.q;
    
    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.innerHTML = `
            <div class="quiz-option-letter">${String.fromCharCode(65 + idx)}</div>
            <div class="text-sm font-medium">${escapeHtml(opt)}</div>
        `;
        btn.onclick = () => selectQuizAnswer(idx, btn);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('quiz-explain-panel').style.display = 'none';
    document.getElementById('quiz-action-btn').style.display = 'none';
}

function selectQuizAnswer(selectedIdx, optionEl) {
    // Disable further selection
    document.querySelectorAll('.quiz-option').forEach(el => {
        el.style.pointerEvents = 'none';
    });

    const quizList = QUIZZES[activeQuizTrackId];
    const q = quizList[currentQuestionIndex];
    const correctIdx = q.correct;

    optionEl.classList.add('selected');

    const explainPanel = document.getElementById('quiz-explain-panel');
    const explainText = document.getElementById('quiz-explain-text');
    explainText.textContent = q.explain;
    explainPanel.style.display = 'block';

    const actBtn = document.getElementById('quiz-action-btn');
    actBtn.style.display = 'inline-flex';

    if (selectedIdx === correctIdx) {
        optionEl.classList.add('correct');
        quizScore++;
        showToast("Correct", "Excellent logic!", "toast-success");
    } else {
        optionEl.classList.add('incorrect');
        // highlight correct option as green
        document.querySelectorAll('.quiz-option')[correctIdx].classList.add('correct');
        showToast("Incorrect", "Review the design rationale below.", "toast-error");
    }

    if (currentQuestionIndex === quizList.length - 1) {
        actBtn.textContent = 'Finish Quiz';
        actBtn.onclick = () => finishQuiz();
    } else {
        actBtn.textContent = 'Next Question';
        actBtn.onclick = () => {
            currentQuestionIndex++;
            showQuizQuestion();
        };
    }
}

function finishQuiz() {
    const total = QUIZZES[activeQuizTrackId].length;
    const finalScorePercent = Math.round((quizScore / total) * 100);
    
    // Save quiz score
    SM.state.quizScores[activeQuizTrackId] = finalScorePercent;
    SM.saveState();
    updateUIProgress();

    // Show completion stats
    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = `
        <div class="glass-panel text-center p-8 border-t-white/10">
            <h3 class="font-headline-xl text-headline-xl text-gradient mb-2">${finalScorePercent}%</h3>
            <p class="text-body-lg text-on-surface mb-6">You scored ${quizScore} out of ${total} points.</p>
            <button class="btn btn-primary" onclick="switchView('dashboard')">Back to Dashboard</button>
        </div>
    `;
    
    document.getElementById('quiz-question-text').textContent = 'Quiz Assessment Complete';
    document.getElementById('quiz-num-label').textContent = 'Results';
    document.getElementById('quiz-bar-fill').style.width = '100%';
    document.getElementById('quiz-explain-panel').style.display = 'none';
    document.getElementById('quiz-action-btn').style.display = 'none';
}

// 8.7 Settings View
function renderSettings() {
    document.getElementById('settings-name-input').value = SM.state.settings.userName || "Ahamad";
    document.getElementById('settings-time-input').value = SM.state.settings.reminderTime;
    document.getElementById('settings-toggle-input').checked = SM.state.settings.reminderEnabled;
    
    document.getElementById('settings-save-btn').onclick = () => {
        const inputName = document.getElementById('settings-name-input').value.trim() || "Ahamad";
        SM.state.settings.userName = inputName;
        SM.state.settings.reminderTime = document.getElementById('settings-time-input').value;
        SM.state.settings.reminderEnabled = document.getElementById('settings-toggle-input').checked;
        SM.saveState();
        
        updateUserNameUI();
        setupNotificationTimer();
        showToast("Settings Saved", "Preferences updated successfully.", "toast-success");
    };

    document.getElementById('settings-reset-btn').onclick = () => {
        if (confirm("Are you sure you want to reset all progress data? This cannot be undone.")) {
            SM.resetState();
            updateUserNameUI();
            switchView('dashboard');
        }
    };
}

function updateUserNameUI() {
    const name = (SM.state.settings && SM.state.settings.userName) ? SM.state.settings.userName : "Ahamad";
    const navBrandName = document.getElementById('nav-brand-name');
    if (navBrandName) {
        navBrandName.textContent = name;
    }
    const aboutProfileName = document.getElementById('about-profile-name');
    if (aboutProfileName) {
        aboutProfileName.textContent = name;
    }
}

// --- 9. UI METRICS & STATE REFRESH ---
function updateUIProgress() {
    // 1. Calculate overall progress percentage
    const totalDays = 90;
    const completedDaysCount = SM.state.completedDays.length;
    const progressPercent = Math.round((completedDaysCount / totalDays) * 100);

    // Update circular progress components
    const fillCircle = document.getElementById('gauge-circle-fill');
    if (fillCircle) {
        // Circumference calculation = 2 * pi * 70 approx 440
        const circumference = 440;
        const offset = circumference - (progressPercent / 100) * circumference;
        fillCircle.style.strokeDashoffset = offset;
        document.getElementById('gauge-value-text').textContent = `${progressPercent}%`;
    }

    // Update sidebar progress labels
    const headerTitle = document.querySelector('header.top-header .header-search');
    if (headerTitle) {
        // Update user state indicator
        document.getElementById('header-path-status').textContent = `Day ${SM.state.currentDay} of 90`;
    }

    // Update subject card progress indicators
    updateSubjectProgressUI('java', 10);
    updateSubjectProgressUI('typescript', 10);
    updateSubjectProgressUI('selenium', 10);
    updateSubjectProgressUI('playwright', 10);
    updateSubjectProgressUI('testng', 5);
    updateSubjectProgressUI('api_manual', 5);
    updateSubjectProgressUI('rest_assured', 10);
    updateSubjectProgressUI('appium', 10);
    updateSubjectProgressUI('devops', 10);
    updateSubjectProgressUI('architecture', 10);
}

function updateSubjectProgressUI(trackId, totalDaysInTrack) {
    const track = CURRICULUM.tracks.find(t => t.id === trackId);
    if (!track) return;
    
    // Count how many days in this track are completed
    let completedCount = 0;
    track.weeks.forEach(w => {
        w.days.forEach(d => {
            if (SM.state.completedDays.includes(d.day)) {
                completedCount++;
            }
        });
    });

    const percent = Math.round((completedCount / totalDaysInTrack) * 100);
    const cardEl = document.querySelector(`.subject-card[data-track="${trackId}"]`);
    if (cardEl) {
        cardEl.querySelector('.subject-percent').textContent = `${percent}%`;
        cardEl.querySelector('.subject-progress-fill').style.width = `${percent}%`;
    }
}

// --- 10. NOTIFICATION & SYSTEM REMINDER ENGINE ---
function initNotificationSystem() {
    const alertBtn = document.getElementById('alert-bell-btn');
    if (alertBtn) {
        alertBtn.addEventListener('click', () => {
            requestNotificationPermission();
        });
    }

    // Initialize HTML5 desktop reminders
    setupNotificationTimer();
}

function requestNotificationPermission() {
    if (!("Notification" in window)) {
        showToast("Notifications", "This browser does not support desktop notifications.", "toast-error");
        return;
    }

    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            showToast("Access Granted", "Notifications enabled successfully! You will receive daily reminders.", "toast-success");
            // Trigger a sample test alert
            new Notification("TestArchitect Pro Active", {
                body: "Ready to level up? Today's study challenge is available in your hub.",
                icon: "https://fonts.gstatic.com/s/i/materialsymbolsoutlined/notifications/v12/24px.svg"
            });
        } else {
            showToast("Access Denied", "Desktop alerts disabled. Re-enable in browser site settings.", "toast-error");
        }
    });
}

function setupNotificationTimer() {
    // Check reminders configurations every minute
    setInterval(() => {
        if (!SM.state.settings.reminderEnabled) return;
        
        const now = new Date();
        const currentHours = now.getHours().toString().padStart(2, '0');
        const currentMins = now.getMinutes().toString().padStart(2, '0');
        const currentTimeStr = `${currentHours}:${currentMins}`;
        
        if (currentTimeStr === SM.state.settings.reminderTime) {
            // Trigger Daily Reminder!
            triggerDailyReminderNotification();
        }
    }, 60000);
}

function triggerDailyReminderNotification() {
    const currentDay = SM.state.currentDay;
    const msg = `Time for your daily upskilling! Jump into Day ${currentDay} learning path.`;
    
    if (Notification.permission === "granted") {
        new Notification("Daily Prep Reminder", {
            body: msg,
            icon: "https://fonts.gstatic.com/s/i/materialsymbolsoutlined/menu_book/v12/24px.svg"
        });
    } else {
        // Fallback in-app alert box toast
        showToast("Study Reminder", msg, "toast-success");
    }

    // Add alert item to mock logs panel
    const alertList = document.getElementById('dash-alerts-list');
    if (alertList) {
        const item = document.createElement('div');
        item.className = 'alert-item info';
        item.innerHTML = `
            <span class="material-symbols-outlined icon">schedule</span>
            <div class="alert-info">
                <h5>Daily Reminder triggered</h5>
                <div class="time">Just now</div>
            </div>
        `;
        alertList.insertBefore(item, alertList.firstChild);
    }
}

// --- 11. GENERAL UTILS ---
function escapeHtml(text) {
    if (typeof text !== 'string') return text;
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function showToast(title, message, typeClass = 'toast-success') {
    const container = document.getElementById('toast-wrapper');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${typeClass}`;
    
    let icon = 'check_circle';
    if (typeClass === 'toast-error') icon = 'cancel';
    
    toast.innerHTML = `
        <span class="material-symbols-outlined text-[20px]">${icon}</span>
        <div class="toast-content">
            <h6>${title}</h6>
            <p>${message}</p>
        </div>
    `;
    
    container.appendChild(toast);
    
    // Auto-remove
    setTimeout(() => {
        toast.style.animation = 'slide-in 0.3s ease reverse forwards';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// --- 12. INITIALIZATION ON LOAD ---
window.addEventListener('DOMContentLoaded', () => {
    initRouting();
    initNotificationSystem();
    updateUserNameUI();
    
    // Default load Home view
    switchView('home');
    updateUIProgress();

    // Subject grid cards bind click events to launch quiz
    document.querySelectorAll('.subject-card').forEach(card => {
        card.addEventListener('click', () => {
            const trackId = card.getAttribute('data-track');
            switchView('quizzes', { trackId });
        });
    });
});
