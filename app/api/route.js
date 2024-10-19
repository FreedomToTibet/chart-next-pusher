import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.NEXT_SECRET_PUSHER_APP_ID,
  key: process.env.NEXT_SECRET_PUSHER_KEY,
  secret: process.env.NEXT_SECRET_PUSHER_SECRET,
  cluster: process.env.NEXT_SECRET_PUSHER_CLUSTER,
  useTLS: true,
});

export async function GET() {
	// the initial value of the company's annual income
	const value = Math.random() * 800000 + 200000;

	setInterval(() => {
		pusher.trigger('company-income', 'new-price', {
			value: value,
		});

		return Response.json({ value: value }, { status: 200 });
		// Using Puser's free plan (200 000 messages/day)
	}, 10000);
	return Response.json({ value: value }, { status: 200 });
}