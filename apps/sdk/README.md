# Publica NodeJS SDK

This is the NodeJS SDK for [Publica](https://publica.do).

You can start by installing the package:

```bash
npm install @publica/node
```

## Usage
```typescript
import Publica from '@publica/node';
const publica = new Publica('your api key', 'your self-hosted instance (optional)');
```

The available methods are:
- `post(posts: CreatePostDto)` - Schedule a post to Publica
- `postList(filters: GetPostsDto)` - Get a list of posts
- `upload(file: Buffer, extension: string)` - Upload a file to Publica
- `integrations()` - Get a list of connected channels
- `deletePost(id: string)` - Delete a post by ID

Alternatively you can use the SDK with curl, check the [Publica API documentation](https://docs.publica.do/public-api) for more information.