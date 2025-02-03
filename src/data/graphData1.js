export const graph = `digraph G {
    node [color=gray, style=filled, fontname=Helvetica, fontsize=12, fontcolor=white];
    edge [color=gray, fontname=Helvetica, fontsize=10, fontcolor=white];

    // Frontend Interaction Block
    subgraph cluster_0 {
            label = "Frontend Interaction 🎨";
            color = lightblue;
            "User Inputs Query" -> "React Captures Query";
            "React Captures Query" -> "Axios Sends Request to Backend";
            "Axios Sends Request to Backend" -> "React Displays Loading State";
            // Optimization
            "React Displays Loading State" -> "Implement Caching on Frontend";
            "Implement Caching on Frontend" -> "Handle User Query Reuse Efficiently";
    }

    // Backend Query Processing Block
    subgraph cluster_1 {
            label = "Backend Handling & Preprocessing ⚙️";
            color = lightgreen;
            "Express Receives Request" -> "Token Optimization (Pre-processing)";
            "Token Optimization (Pre-processing)" -> "Check Cache for Similar Query";
            "Check Cache for Similar Query" -> "Return Cached Response";
            "Check Cache for Similar Query" -> "Proceed with Query Retrieval";
            "Proceed with Query Retrieval" -> "Initiate Parallel Query Optimization";
            // Optimization
            "Check Cache for Similar Query" -> "Distributed Cache (Redis for Scalability)";
            "Distributed Cache (Redis for Scalability)" -> "Ensure Non-blocking Token Optimizations";
            // Pre-Processing Block
            subgraph cluster_8 {
                label = "Pre-Processing 🛠️";
                color = orange;
                "Pre-Processing: Data Cleaning" [shape=box, color=amber, style=dotted, fontcolor=black];
                "Pre-Processing: Data Transformation" [shape=box, color=amber, style=dotted, fontcolor=black];
                "Pre-Processing: Feature Engineering" [shape=box, color=amber, style=dotted, fontcolor=black];
                "Pre-Processing Error Handling" [shape=box, color=red];
                "Pre-Processing: Data Cleaning" -> "Pre-Processing: Data Transformation";
                "Pre-Processing: Data Transformation" -> "Pre-Processing: Feature Engineering";
                "Pre-Processing: Feature Engineering" -> "Pre-Processing Error Handling";
            }
    }

    // Query Retrieval Block (Sharded VectorDB)
    subgraph cluster_2 {
            label = "Query Retrieval and Semantic Search 🔍";
            color = darkorange;
            "Initiate Parallel Query Optimization" -> "VectorDB Semantic Search (Sharded)";
            "VectorDB Semantic Search (Sharded)" -> "Retrieve Relevant Documents";
            "Retrieve Relevant Documents" -> "Pass Context to LangChain";
            // Optimization
            "VectorDB Semantic Search (Sharded)" -> "Sharding & Indexing for Faster Retrieval";
            "Retrieve Relevant Documents" -> "Async Querying (Node.js Parallelization)";
    }

    // AI Processing Block (LangChain)
    subgraph cluster_3 {
            label = "AI Optimization and Query Execution 🧠";
            color = black;
            "Pass Context to LangChain" -> "LangChain Optimizes Query";
            "LangChain Optimizes Query" -> "Execute Optimized Query on MySQL";
            "Execute Optimized Query on MySQL" -> "Process Data and Extract Insights";
            // Optimization
            "LangChain Optimizes Query" -> "Efficient Hugging Face / OpenAI Models / DeepSeek / Own Model";
            "Execute Optimized Query on MySQL" -> "Parallel Query Execution for Faster Results";
            subgraph cluster_4 {
                label = "Post-Processing 📊";
                color = purple;
                "Post-Processing: Data Visualization" [shape=box, color=green];
                "Post-Processing: Report Generation" [shape=box, color=green];
                "Post-Processing: Export to CSV" [shape=box, color=green];
                "Post-Processing Error Handling" [shape=box, color=red];
                "Post-Processing: Data Visualization" -> "Post-Processing: Report Generation";
                "Post-Processing: Report Generation" -> "Post-Processing: Export to CSV";
                "Post-Processing: Report Generation" -> "Check Database for Similar Components";
                "Check Database for Similar Components" -> "AI Model: Generate React Component";
                "AI Model: Generate React Component" -> "Store Component for Later Use";
                "Store Component for Later Use" -> "React Frontend - Dynamically Render Component";
            }
    }

    // Post-processing and Response Block
    subgraph cluster_4 {
            label = "Data Formatting & Response 📊";
            color = purple;
            "Process Data and Extract Insights" -> "Format JSON Response";
            "Format JSON Response" -> "Store in Distributed Cache";
            "Store in Distributed Cache" -> "Send Data to React Frontend";
            "Send Data to React Frontend" -> "React Renders Results for User";
            // Optimization
            "Format JSON Response" -> "Cache Expiration and Refresh";
            "Send Data to React Frontend" -> "Preload Common Queries for Speed";
    }

    // Frontend Response Block
    subgraph cluster_6 {
            label = "Frontend Response to User 🖥️";
            color = lightblue;
            "Send Data to React Frontend" -> "React Renders Results for User";
            // Optimization
            "React Renders Results for User" -> "UI/UX Optimizations (Smooth Animations)";
            "React Renders Results for User" -> "Preloading Results for Common Queries";
    }

    // Scalability Block
    subgraph cluster_7 {
            label = "System Scalability & Monitoring 📈";
            color = lavender;
            "Add Backend Servers" -> "Horizontal Scaling of Backend Services";
            "Horizontal Scaling of Backend Services" -> "Use Load Balancer for Traffic Distribution";
            "Use Load Balancer for Traffic Distribution" -> "Use Kubernetes for Auto-Scaling";
            // Optimization
            "Add Backend Servers" -> "Enable Auto-scaling for Resources";
            "Use Kubernetes for Auto-Scaling" -> "Monitor System Health with Prometheus";
    }


    // Node Definitions (Colors for different processes)
    "User Inputs Query" [shape=box, color=blue];
    "React Captures Query" [shape=box, color=blue];
    "Axios Sends Request to Backend" [shape=box, color=blue];
    "React Displays Loading State" [shape=box, color=blue];
    "Express Receives Request" [shape=box, color=green];
    "Token Optimization (Pre-processing)" [shape=box, color=green];
    "Check Cache for Similar Query" [shape=box, color=green];
    "Proceed with Query Retrieval" [shape=box, color=green];
    "Initiate Parallel Query Optimization" [shape=box, color=darkorange];
    "VectorDB Semantic Search (Sharded)" [shape=box, color=darkorange];
    "Retrieve Relevant Documents" [shape=box, color=darkorange];
    "Pass Context to LangChain" [shape=box, color=black];
    "LangChain Optimizes Query" [shape=box, color=black];
    "Execute Optimized Query on MySQL" [shape=box, color=black];
    "Process Data and Extract Insights" [shape=box, color=black];
    "Format JSON Response" [shape=box, color=purple];
    "Store in Distributed Cache" [shape=box, color=purple];
    "Send Data to React Frontend" [shape=box, color=blue];
    "React Renders Results for User" [shape=box, color=blue];
    "Add Backend Servers" [shape=box, color=lavender, fontcolor=black];
    "Horizontal Scaling of Backend Services" [shape=box, color=lavender, fontcolor=black];
    "Use Load Balancer for Traffic Distribution" [shape=box, color=lavender, fontcolor=black];
    "Use Kubernetes for Auto-Scaling" [shape=box, color=lavender, fontcolor=black];
}
`;

export const graph2 = `digraph G {
node [color=gray, style=filled, fontname=Helvetica, fontsize=12, fontcolor=white];
edge [color=gray, fontname=Helvetica, fontsize=10, fontcolor=white];

// Error Handling Block
subgraph cluster_11 {
    label = "Error Handling and Recovery ⚠️";
    color = lightcoral;
    "AI Model Failure" -> "Fallback to Predefined Response";
    "Database Query Failure" -> "Return Error Message to Frontend";
    "System Error" -> "Log Error and Notify User";
    "Cache Miss" -> "Proceed with Query Retrieval (No Cache Hit)";
    "Hugging Face API Failure" -> "Return Fallback Response to Backend";
    "API Rate Limit Exceeded" -> "Retry with Exponential Backoff";
    "Timeout Error" -> "Retry with Backoff or Provide Degraded Results";
    // Optimization
    "AI Model Failure" -> "Implement Circuit Breaker for External APIs";
    "Database Query Failure" -> "Graceful Degradation or Retry Logic";
}

// Node Definitions for error handling
"AI Model Failure" [shape=box, color=lightcoral];
"Database Query Failure" [shape=box, color=lightcoral];
"System Error" [shape=box, color=lightcoral];
"Cache Miss" [shape=box, color=lightcoral];
"Hugging Face API Failure" [shape=box, color=lightcoral];
"API Rate Limit Exceeded" [shape=box, color=lightcoral];
"Timeout Error" [shape=box, color=lightcoral];
}
`;

export const graph3 = `digraph G {
    // --- Additional Mitigation Layer ---
    subgraph cluster_10 {
            label = "Mitigation Layer: Security, Observability, Governance & Optimization 🛡️";
            color = darkred;
            "User Authentication" [shape=box, color=red];
            "RBAC Enforcement" [shape=box, color=red];
            "Data Encryption/Decryption" [shape=box, color=red];
            "Input Validation Guardrail" [shape=box, color=red];
            "Output Sanitization" [shape=box, color=red];
            "Centralized Logging & Monitoring" [shape=box, color=red];
            "Real-Time Alerting" [shape=box, color=red];
            "Configuration Versioning & Audit Trail" [shape=box, color=red];
            "Data Governance & Compliance" [shape=box, color=red];
            "Auto-Scaling Controller" [shape=box, color=red];
            "Cost Optimization Manager" [shape=box, color=red];

            // Connect mitigation nodes to key processes
            "Express Receives Request" -> "User Authentication";
            "User Authentication" -> "Token Optimization (Pre-processing)";
            "Check Cache for Similar Query" -> "Data Encryption/Decryption";
            "Process Data and Extract Insights" -> "Output Sanitization";
            "Store in Distributed Cache" -> "Centralized Logging & Monitoring";
            "Add Backend Servers" -> "Auto-Scaling Controller";
            "Use Kubernetes for Auto-Scaling" -> "Monitor System Health with Prometheus";
            "Use Load Balancer for Traffic Distribution" -> "Cost Optimization Manager";
    }
}
`;
