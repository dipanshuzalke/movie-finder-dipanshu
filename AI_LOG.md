## Tools Used

* Next.js App Router for routing, server components, and page structure.
* TMDb (The Movie Database) API for movie data, search, movie details, credits, and recommendations.
* shadcn/ui for reusable UI components such as Cards, Pagination, Buttons, and Loading States.
* Tailwind CSS for styling and responsive design.
* ChatGPT (GPT-5.5) for UI design suggestions, component structure, TypeScript types, and debugging help.

---

## Prompts

### Prompt 1 : Build a Movie Discovery App in Next.js that fetches data from a free public API and lets users browse, search, view details, and save favorites.

-> It helped establish the overall architecture of the application including pages, components, API integration, and required features.

### Prompt 2 Create a professional movie details page similar to Netflix/IMDb using shadcn components.

-> It generated a much cleaner layout for the movie details page and helped organize ratings, overview, director information, and recommendations.

### Prompt 3 : Implement live movie search where results update as the user types and close the dropdown when clicking outside.

-> It helped create a responsive search experience with debouncing, dropdown suggestions, loading states, and proper user interactions.

---

## What I Fixed Manually

### 1. Pagination Implementation

The initial AI-generated pagination solution used a custom pagination component. Since the assignment required a polished UI and I was already using shadcn/ui, I replaced the generated pagination with the shadcn Pagination component. I then adapted the logic to work with TMDb page navigation, Previous/Next controls, and the requirement of displaying exactly 12 movies per page.

### 2. Movie Type Definitions

Some generated code used incorrect TypeScript types such as passing component prop types where movie data types were expected. I corrected the interfaces and ensured components received properly typed movie objects.

### 3. Movie Details Layout

The initial movie details page looked unbalanced on larger screens. I manually adjusted spacing, typography, and layout to create a cleaner two-column design with better visual hierarchy.

### 4. API Connectivity Issues

While integrating TMDb, I encountered network timeout issues in Node.js that were not caused by the application code itself. I manually tested API endpoints, isolated the issue, and continued development using alternative approaches while debugging the environment.

### 5. Search Results UI

The initial search implementation only navigated to a search page. I refined it into a live-search dropdown with loading, error, and empty states to provide a better user experience.
