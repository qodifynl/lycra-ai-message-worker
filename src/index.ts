import { OpenAPIRouter } from "@cloudflare/itty-router-openapi";

export const router = OpenAPIRouter({
  schema: {
    info: {
      title: 'Lycra AI Worker Send Message',
      description: 'The AI worker to ask for details of the user',
      version: 'v0.0.1',
    },
  },
  docs_url: '/',
  aiPlugin: {
    name_for_human: 'Lycra AI',
    name_for_model: 'lycra',
    description_for_human: "The AI worker to ask for details of the user",
    description_for_model: "The AI worker to ask for details of the user",
    contact_email: 'help@fifty2.ae',
    legal_info_url: 'https://plugin.tinyai.id/legal',
    logo_url: 'https://tinyai.id/tiny.png',
  },
})

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }))

export default {
  fetch: router.handle
}