// 'use client'

// import { Card, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import AnimatedSection from './AnimatedSection'

// interface InstagramPost {
//   id: string
//   imageUrl: string
//   caption: string
//   permalink: string
//   timestamp: string
//   emoji: string
// }

// export default function InstagramFeed() {
//   // Mock Instagram posts (would fetch from Instagram API)
//   const posts: InstagramPost[] = [
//     {
//       id: '1',
//       imageUrl: '',
//       caption: 'Art time with our preschoolers! 🎨',
//       permalink: 'https://instagram.com/thisdaycare',
//       timestamp: '2 days ago',
//       emoji: '🎨'
//     },
//     {
//       id: '2',
//       imageUrl: '',
//       caption: 'Outdoor fun on a beautiful day! ☀️',
//       permalink: 'https://instagram.com/thisdaycare',
//       timestamp: '3 days ago',
//       emoji: '🌞'
//     },
//     {
//       id: '3',
//       imageUrl: '',
//       caption: 'Story time is always a favorite! 📚',
//       permalink: 'https://instagram.com/thisdaycare',
//       timestamp: '5 days ago',
//       emoji: '📚'
//     },
//     {
//       id: '4',
//       imageUrl: '',
//       caption: 'Music and movement class! 🎵',
//       permalink: 'https://instagram.com/thisdaycare',
//       timestamp: '1 week ago',
//       emoji: '🎵'
//     },
//     {
//       id: '5',
//       imageUrl: '',
//       caption: 'Our amazing teaching team! 👩‍🏫',
//       permalink: 'https://instagram.com/thisdaycare',
//       timestamp: '1 week ago',
//       emoji: '👩‍🏫'
//     },
//     {
//       id: '6',
//       imageUrl: '',
//       caption: 'Healthy snack time! 🍎',
//       permalink: 'https://instagram.com/thisdaycare',
//       timestamp: '2 weeks ago',
//       emoji: '🍎'
//     },
//   ]

//   return (
//     <section className="py-20 bg-gradient-to-br from-warmbeige-50 to-blush-50">
//       <div className="container mx-auto px-4">
//         <AnimatedSection className="text-center mb-12">
//           <div className="inline-flex items-center gap-3 mb-4">
//             <div className="text-5xl">📱</div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
//               Follow Us on Instagram
//             </h2>
//           </div>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
//             See our daily adventures, happy moments, and what makes our community special!
//           </p>
//           <a 
//             href="https://instagram.com/thisdaycare" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="inline-block"
//           >
//             <Button 
//               variant="outline" 
//               className="rounded-full border-2 border-blush-400 hover:bg-blush-50"
//             >
//               @thisdaycare
//             </Button>
//           </a>
//         </AnimatedSection>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
//           {posts.map((post, index) => (
//             <AnimatedSection key={post.id} delay={index * 0.05}>
//               <a 
//                 href={post.permalink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block group"
//               >
//                 <Card className="overflow-hidden hover:shadow-2xl transition-all rounded-3xl aspect-square">
//                   <div className="relative h-full bg-gradient-to-br from-blush-100 via-skyblue-100 to-mint-100 flex items-center justify-center text-7xl">
//                     <div className="transform group-hover:scale-110 transition-transform">
//                       {post.emoji}
//                     </div>
                    
//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
//                       <div className="text-white text-sm font-medium line-clamp-2">
//                         {post.caption}
//                       </div>
//                     </div>
//                   </div>
//                 </Card>
//               </a>
//             </AnimatedSection>
//           ))}
//         </div>

//         <AnimatedSection className="text-center" delay={0.3}>
//           <a 
//             href="https://instagram.com/thisdaycare" 
//             target="_blank" 
//             rel="noopener noreferrer"
//           >
//             <Button 
//               size="lg" 
//               className="rounded-full bg-gradient-to-r from-blush-500 to-blush-600 hover:from-blush-600 hover:to-blush-700 px-8"
//             >
//               View More on Instagram →
//             </Button>
//           </a>
//         </AnimatedSection>
//       </div>
//     </section>
//   )
// }



