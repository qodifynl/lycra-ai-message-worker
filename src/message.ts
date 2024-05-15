import { OpenAPIRoute, Str } from "@cloudflare/itty-router-openapi";

export class SendMessage extends OpenAPIRoute {
  static schema = {
    tags: ['Send message'],
    summary: 'Send a message with name, email, and phone number',
    requestBody: {
      name: new Str({
        required: true,
        description: "The name of the sender",
      }),
      email: new Str({
        required: true,
        description: "The email of the sender",
      }),
      phoneNumber: new Str({
        required: true,
        description: "The phone number of the sender",
      }),
      message: new Str({
        required: true,
        description: "The message to send",
      }),
    },
    responses: {
      '200': {
        schema: {
          response: 'Message sent successfully',
        },
      },
      '400': {
        schema: {
          response: 'Failed to send message',
        },
      },
    },
  };

  async handle(request: Request, env, ctx, data: Record<string, any>) {
    const { name, email, phoneNumber, message } = data.body;

    // Simulate saving message to a database or sending it via an API
    // Replace this with actual implementation
    try {
      // Example of saving to a Cloudflare KV (key-value store)
      await env.MESSAGES.put(Date.now().toString(), JSON.stringify(data.body), {
        expirationTtl: 60 * 60 * 24 * 7, // 1 week
        metadata: { ...data.body, created: Date.now() },
      });

      return {
        response: `Message from ${name} sent successfully.`,
      };
    } catch (error) {
      return new Response('Failed to send message', { status: 400 });
    }
  }
}