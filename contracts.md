# API Contracts & Integration Plan
## IIT Delhi Abu Dhabi FinTech Club Website

### Current State
- ✅ Frontend implemented with React + Tailwind CSS
- ✅ Mock data implemented in `/frontend/src/mock.js`
- ✅ Contact form working with localStorage (mock)
- ⏳ Backend integration needed

### Data Models & Collections

#### 1. Contact Submissions (`contact_submissions`)
```json
{
  "_id": "ObjectId",
  "name": "string (required)",
  "email": "string (required, email format)",
  "message": "string (required)",
  "timestamp": "datetime",
  "status": "string (enum: pending, reviewed, responded)"
}
```

### Required API Endpoints

#### 1. Contact Form Submission
- **Endpoint**: `POST /api/contact`
- **Purpose**: Store contact form submissions
- **Request Body**:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com", 
  "message": "I am interested in joining the FinTech Club..."
}
```
- **Response**:
```json
{
  "success": true,
  "message": "Thank you for reaching out! We'll get back to you soon.",
  "id": "submission_id"
}
```

#### 2. Get Contact Submissions (Optional - for admin)
- **Endpoint**: `GET /api/contact`
- **Purpose**: Retrieve all submissions for admin review
- **Response**:
```json
{
  "success": true,
  "submissions": [
    {
      "id": "submission_id",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "message": "...",
      "timestamp": "2024-01-10T12:00:00Z",
      "status": "pending"
    }
  ]
}
```

### Frontend Integration Changes

#### 1. Replace Mock Contact Form Submission
**File**: `/frontend/src/mock.js`
- **Current**: `submitContactForm()` saves to localStorage
- **New**: Replace with actual API call to `/api/contact`

**File**: `/frontend/src/components/ContactSection.jsx`  
- **Current**: `import { submitContactForm } from '../mock'`
- **New**: Create actual API service call

#### 2. New API Service File
**Create**: `/frontend/src/services/api.js`
```javascript
const API_BASE = process.env.REACT_APP_BACKEND_URL + '/api';

export const submitContactForm = async (formData) => {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit form');
  }
  
  return await response.json();
};
```

### Backend Implementation Plan

#### 1. Database Models
**File**: `/backend/models.py` (if needed)
- Define Pydantic models for request/response validation
- ContactSubmission model with validation

#### 2. API Routes  
**File**: `/backend/server.py`
- Add contact submission endpoints
- Implement proper error handling
- Add request validation

#### 3. Database Operations
- Create MongoDB collection for contact_submissions
- Implement CRUD operations
- Add proper indexing for email and timestamp

### Static Content (No Backend Needed)
The following content remains static in the frontend:
- **Hero section data** (club info, tagline)
- **About section data** (mission, vision, offerings)
- **Events data** (past/upcoming events)
- **Team data** (secretary profiles)

*Note: These could be moved to CMS in future iterations*

### Integration Testing Checklist
- [ ] Contact form submits successfully
- [ ] Form validation works properly  
- [ ] Success/error messages display correctly
- [ ] Form clears after successful submission
- [ ] Data persists in MongoDB
- [ ] API handles edge cases (validation errors, server errors)

### Error Handling Strategy
1. **Frontend**: Display user-friendly error messages
2. **Backend**: Return structured error responses
3. **Database**: Handle connection issues gracefully
4. **Validation**: Validate email format, required fields

### Security Considerations
1. **Input validation** on both frontend and backend
2. **Rate limiting** for contact form submissions
3. **Email validation** to prevent spam
4. **CORS** configuration for frontend-backend communication

This contract ensures seamless integration between the existing frontend and the new backend implementation.